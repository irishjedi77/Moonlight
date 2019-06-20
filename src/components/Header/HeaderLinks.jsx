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
  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>
        <Link to ="/job-postings">
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <ViewList className={classes.icons} />Project Postings
        </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ViewList className={classes.icons} />Employers
        </Button>
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

    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
