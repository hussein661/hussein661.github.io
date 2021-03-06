import React, { Component } from "react";
import { API_PREFIX, PUBLIC_URL } from "../utils/Dirs";
import checkRespone from "../utils/checkResponse";
import { Button, Header } from "./common";
import TextField from "@material-ui/core/TextField";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import formatDate from "../utils/formatDate";
var currencyFormatter = require('currency-formatter');
 

class PostEdit extends Component {
  state = {
    problem: { images: [] },
    donations: [],
    viewMore:false,
    saving:false
  };
  componentDidMount() {
    this._getProblem();
    this._getDonations();
  }

  checkOwner = () =>{
    const user_id = localStorage.getItem('user_id')
    const problemOwnerId = this.state.problem.user_id
    if(user_id === problemOwnerId){
      return true
    }
  }
  handleChange = e => {
    let problem = { ...this.state.problem };
    problem[e.target.name] = e.target.value;
    this.setState({ problem });
  };
  _getDonations() {
    const URL =
      PUBLIC_URL +
      API_PREFIX +
      "receiver_donations/" +
      this.props.params.problemId;
    checkRespone(URL, "get").then(r => {
      this.setState({ donations: r.data });
    });
  }

  _getProblem() {
    const URL =
      PUBLIC_URL + API_PREFIX + "problem/" + this.props.params.problemId;
    checkRespone(URL, "get").then(r => {
      this.setState({ problem: r.data.problem });
    });
  }

  update = e => {
    this.setState({saving:true})
    e.preventDefault();
    const URL =
      PUBLIC_URL + API_PREFIX + `problems/edit/${this.props.params.problemId}`;
    const { problem } = this.state;
    checkRespone(URL, "put", problem).then(r => {
      this.setState({saving:false})
      NotificationManager.success("problem successfully updated");
    });
  };

  err = () => {
    if (this.state.err) {
      return (
        <div style={{ textAlign: "center", fontSize: 15, color: "red" }}>
          {this.state.err}
        </div>
      );
    }
  };

  getTotal = ()=>{
    const donations = this.state.donations
    
    let arr = [0]
    donations.map(don=>{
      arr.push(don.amount)
    })
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer)
  }
  render() {
    const viewEditForm =  this.checkOwner()
    const total = currencyFormatter.format(this.getTotal(), { code: 'USD' });
    return (
      <div className="formContainer" style={{ width: "100%", marginRight: 55 }}>
        <div className="historyPost">
          <div className="galleryPost">
            {this.state.problem.images.map(img => (
              <div className="imageDiv">
                <img  style={{width:230,height:200}} src={PUBLIC_URL + img} />
              </div>
            ))}
          </div>
          <div className="formPost" style={{display: viewEditForm ? '' : 'none'}}>
            <form onSubmit={this.update}>
              <Header>Edit your post</Header>
              {this.err()}
              <TextField
                className="textField"
                // label="Title"
                onChange={e => this.handleChange(e)}
                margin="dense"
                name="title"
                variant="outlined"
                error={this.state.title_error}
                required
                value={this.state.problem.title}
              />
              <TextField
                className="textField"
                // label="Description"
                onChange={e => this.handleChange(e)}
                margin="dense"
                name="description"
                multiline
                value={this.state.problem.description}
                rowsMax="4"
                variant="outlined"
                error={this.state.description_error}
                required
              />
              <TextField
                className="textField"
                required
                error={this.state.needed_amount_error}
                name="needed_amount"
                onChange={e => this.handleChange(e)}
                // label="amount"
                margin="dense"
                variant="outlined"
                value={this.state.problem.needed_amount}
              />
              <Button type="submit" opacity={this.state.saving ? 0.5 : 1} disabled={this.state.saving}>Sav{this.state.saving ? 'ing' : 'e'}</Button>
            </form>
          </div>
          <div>
          <div>Total amount : <b style={{color:'green'}}>{total}</b></div>
          <hr/>
            Recent
            <ul>
              {this.state.donations.map((donation,idx) =>{
              if(this.state.viewMore || idx < 5){
              return (
                <li>
                  <b
                    style={{ cursor: "pointer" }}
                    onClick={_ => this.props.history.push("")}
                  >
                    {donation.donor_firstName} {donation.donor_lastName}
                  </b>{" "}
                  has donated you an amount of 
                  <span style={{ color: "green",fontWeight:500 }}> {donation.amount} $</span> on {formatDate(donation.created_at)}
                </li>
              )}}
              )}
              <a style={{cursor:'pointer'}} onClick={_=>this.setState({viewMore:!this.state.viewMore})}>
                {this.state.viewMore ? 'view less...' : 'view more...'}
                </a>
            </ul>
          </div>
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

const styles = {
  smallInput: {
    width: "50%"
  }
};

export default PostEdit;
