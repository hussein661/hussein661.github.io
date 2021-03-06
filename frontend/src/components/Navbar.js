import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";
import { Tab, Tabs } from "@material-ui/core";
import { withRouter } from "react-router";
import ReactSearchBox from "react-search-box";
let data = [
  {
    key: "john",
    value: "John Doe"
  },
  {
    key: "jane",
    value: "Jane Doe"
  },
  {
    key: "mary",
    value: "Mary Phillips"
  },
  {
    key: "robert",
    value: "Robert"
  },
  {
    key: "karius",
    value: "Karius"
  }
];
const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    searchfor: "",
    data: ["ali", "ahmad", "nabil", "bilal", "husseun"],
    list: ["ali", "ahmad"]
  };

  search = e => {
    if (e.keyCode == 13) {
    }
  };

  changeSearch = e => {
    var queryData = [];
    if (e.target.value != "") {
      this.state.data.forEach(function(person) {
        if (person.toLowerCase().indexOf(e.target.value) != -1) {
          if (queryData.length < 10) {
            queryData.push(person);
          }
        }
      });
    }
    this.setState({ list: queryData });
  };

  componentDidMount() {
    // this.getAllUsers()
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  goToProfile = () => {
    this.props.history.push("/user/"+ localStorage.getItem('user_id'));
    this.handleMenuClose();
  };
  SignOut = () => {
    localStorage.clear();
    this.handleMenuClose();
    this.props.history.push("/login");
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  logIn = () => {
    const URL = this.props.history.push("/login");
  };

  render() {
    let items = [
      { id: 0, value: "ruby" },
      { id: 1, value: "javascript" },
      { id: 2, value: "lua" },
      { id: 3, value: "go" },
      { id: 4, value: "julia" }
    ];
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.goToProfile}>Profile</MenuItem>
        <MenuItem onClick={this.SignOut}>Sign Out</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#5c90f2" }}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              LEND A HAND
            </Typography>
            <Tabs style={styles.tabs}>
              <Tab label="Home" onClick={_ => this.props.history.push("/")} />
              <Tab
                label="Post A Problem"
                onClick={_ => this.props.history.push("/postAProblem")}
                hidden={!this.props.isLoggedIn()}
              />
              <Tab
                label="Feed Back"
                onClick={_ => this.props.history.push("/feedBack")}
                hidden={!this.props.isLoggedIn()}
              />
            </Tabs>
            {/* <div className={classes.search}> */}
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <div>
                {/* <ReactSearchBox
                  placeholder="Placeholder"
                  value="Doe"
                  data={data}
                  inputBoxFontColor='red'
                  dropDownHoverColor='blue'
                  dropDownBorderColor='yellow'
                  callback={record => console.log(record)}
                /> */}
              </div>
            {/* </div> */}
            <div className={classes.grow} />
            {this.props.isLoggedIn() ? (
              <div className={classes.sectionDesktop}>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  aria-owns={isMenuOpen ? "material-appbar" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            ) : (
              <Tabs>
                <Tab
                  style={{ color: "red" }}
                  label="Log In"
                  onClick={this.logIn}
                />
                <Tab
                  label="Register"
                  onClick={_ => this.props.history.push("/Register")}
                />
              </Tabs>
            )}

            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input onChange={this.props.search} placeholder="Search Pokemon" />
      </div>
    );
  }
}

class SearchResult extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.data.map(function(value) {
            return <Item key={value} val={value} />;
          })}
        </ul>
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    return <li>{this.props.val}</li>;
  }
}

export default withRouter(withStyles(styles)(PrimarySearchAppBar));
