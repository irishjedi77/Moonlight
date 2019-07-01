import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";


import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>How We Work</h2>
            <h5 className={classes.description}>
            <h4>Clients</h4>
            Need help with a web development project? Simply sign up and provide details on your organization and the nature of your project. Your project is then stored in a profile that is visible to others, but can only be edited by you. Registered clients can then post projects and compensation details that are visible to the freelancer community. Log in to access and edit your profile or add and edit projects at any time.
            <br></br>
            <br></br>
            <h5 className={classes.description}>
            <h4>Freelancers</h4>
            Looking for freelancing opportunities in web development? Check out our current opportunities via the Project Postings link above. Review projects and reach out to clients. 
            </h5>
            
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

ProductSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(productStyle)(ProductSection);
