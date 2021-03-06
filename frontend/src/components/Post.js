import React, { Component } from "react";
import formatDate from "../utils/formatDate";
import {PUBLIC_URL} from "../utils/Dirs";
import { Button } from "./common";

class Post extends Component {

  render() {
    const { post } = this.props;
    var time = formatDate(post.created_at);
    let displayImage = post.images[0]
    let aquired = false
    if(post.recieved_amount >= post.needed_amount){
      aquired=true
    }
    let src = ''
    console.log(displayImage)
    if(!displayImage){
      src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png'
    }else {
      src = `${PUBLIC_URL}/` + displayImage 
    }
    return (
      <div className="card">
                  <div className="cardHeader"> 
            <div>
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
            </div>
            <div style={{cursor:'pointer'}} onClick={_=>this.props.history.push('./user/' + post.user_id)}>
              <p>
                {post.first_name} {post.last_name}
              </p>
            </div>
          </div>
        <img
          onClick={_=>this.props.history.push(`/problem/${post.id}`)}
          className="card-img-top"
          src={src}
          alt="post image"
          style={{height:"160px"}}
        />
        <div className="card-body">

          <h5 className="card-title">Title : {post.title}</h5>
          <p className="card-text">Description : {post.description}</p>
          <p className="card-amount">Amount : {post.needed_amount} $</p>
          <p className="card-amount">Received : {post.recieved_amount} $</p>
        </div>
        <Button background="red" disabled={aquired} background={aquired ? 'green' : 'red'} onClick={()=>this.props.history.push({
          pathname :"/problem/donate/" + post.id,
          state:post
        })}>
          {aquired ? 'Problem solved' : 'Help'}
        </Button>
        <div className="card-footer">
          <small className="text-muted">{time}</small>
        </div>
      </div>
    );
  }
}

export default Post;
