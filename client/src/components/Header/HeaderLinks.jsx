/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, ViewList, PowerSettingsNew, Mood } from "@material-ui/icons";

// core components

import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import { LoginContext } from "../Context/loginContext";


class HeaderLinks extends React.Component {

  state = {

    redirect: false, 
    name: ""
  }

  


  logout = (name) =>{
    this.context.changeLoggedIn(); 
    this.context.changeLoggedInUser(name); 
    

  }


  //static contextType = LoginContext
  render() {
    //const { loggedIn} = this.context
    const { classes } = this.props;
    return (
      <List className={classes.list}>

        <ListItem className={classes.listItem}>
          <Link to="/client-jobs">
            <Button

              color="transparent"
              className={classes.navLink}
            >
              <ViewList className={classes.icons} />Project Postings
        </Button>
          </Link>
        </ListItem>

        {this.context.loggedIn && <ListItem className={classes.listItem}>
          <Link to={"/profile-page/" + this.context.loggedInUser}>
            <Button
              color="transparent"
              className={classes.navLink}
              onClick={this.props.loadProfile2}
            >
              <Mood className={classes.icons} />Profile
          </Button>
          </Link>
        </ListItem>
        }
        {!this.context.loggedIn &&
          <ListItem className={classes.listItem}>
            <Link to="/login-page">
              <Button
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <PowerSettingsNew className={classes.icons} />Login
              </Button>
            </Link>
          </ListItem>
        }
        {this.context.loggedIn && <ListItem className={classes.listItem}>
          <Link to="/">
            <Button
              onClick={() => this.logout(this.state.name)}
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              <PowerSettingsNew className={classes.icons} />Logout
            </Button>
          </Link>
        </ListItem>
        }

      </List>
    );
  }
}


HeaderLinks.contextType = LoginContext;
export default withStyles(headerLinksStyle)(HeaderLinks);
