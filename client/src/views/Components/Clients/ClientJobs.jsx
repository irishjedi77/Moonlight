import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import PropTypes from "prop-types"; 
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

//API
import API from "../../../utils/API"



import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  state = {
    jobs: []

  }

  componentDidMount() {
    this.loadJobs();
  }

  loadJobs = () => {
    API.getJobs()
      .then(res =>
        this.setState({ jobs: res.data }),
        
       
      )
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Job Postings</h2>
            <div className="jobsHere">
    
              {this.state.jobs.length ? (
                <div>
                  {this.state.jobs.map(job => (
                    <GridContainer justify="center">
                      <Card>
                        <CardBody style={{backgroundColor: "#DCDCDC"}}>
                          <h4 className={classes.cardTitle}>{job.jobTitle}</h4>
                          <h6 className={classes.cardSubtitle}>Project Description</h6>
                          <p>{job.jobDescription}</p>
                          <br></br>
                          <h6 className={classes.cardSubtitle}>Project Compensation</h6>
                          <p>{job.jobCompensation}</p>

                        </CardBody>
                      </Card>
                    </GridContainer>

                  ))}
                </div>
                
              ) : (
                  <h3>No Results to Display</h3>
                )}
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
