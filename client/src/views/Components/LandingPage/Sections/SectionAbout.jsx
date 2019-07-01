import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import PropTypes from "prop-types"; 


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
            <h2 className={classes.title}>About Moonlight</h2>
            <h5 className={classes.description}>
              Moonlight is a commission free app specific to web development where freelancers and clients can connect. We eliminate some of the challenges for clients and developers associated with other freelancing sites by monitoring project rates to ensure fair compensation and avoid bidding wars. There is also no cap on the number of jobs a freelancer can apply for. Moonlight is web development freelancing simplified. 
            </h5>
            <h2 className={classes.title}>How We Work</h2>
            <h5 className={classes.description}>
            <h4 style={{color: "#00bcd4"}}>Clients</h4>
            Need help with a web development project? Simply sign up and provide details on your organization and the nature of your project. Your project is then stored in a profile that is visible to others, but can only be edited by you. Registered clients can then post projects and compensation details that are visible to the freelancer community. Log in to access and edit your profile or add and edit projects at any time.
            </h5>
            <br></br>
            <h5 className={classes.description}>
            <h4 style={{color: "#00bcd4"}}>Freelancers</h4>
            Looking for freelancing opportunities in web development? Check out our current opportunities via the Project Postings link above. Review projects and reach out to clients. 
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

ProductSection.propTypes = {
    classes: PropTypes.object
}

export default withStyles(productStyle)(ProductSection);
