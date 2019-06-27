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



function HeaderLinks({ ...props }) {
  const { classes } = props;

  const logOut = event => {
    event.preventDefault()
    window.localStorage.removeItem("user-token");
  }
  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>
        <Link to ="/client-jobs">
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <ViewList className={classes.icons} />Project Postings
        </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/profile-page">
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <Mood className={classes.icons} />Profile
          </Button>
        </Link>
      </ListItem>

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
      <ListItem className={classes.listItem}>
        <Link to="/">
          <Button
            onClick={logOut}
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <PowerSettingsNew className={classes.icons} />Logout
        </Button>
        </Link>
      </ListItem>
      <div>
    </div>

    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
