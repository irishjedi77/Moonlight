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
            <h2 className={classes.title}>Job Postings!</h2>
            <div>
              Jobs will go here!
            </div>
            <br></br>
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
