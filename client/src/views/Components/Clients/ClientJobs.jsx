import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

//API
import API from "../../../utils/API"



import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import Modal from "../../../components/Modal/emailModal.jsx";

class ProductSection extends React.Component {
  state = {
    jobs: {}

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
    //console.log(this.state.jobs)
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Job Postings</h2>
            <div className="jobsHere">

              {this.state.jobs.length ? (
                <div>
                  {this.state.jobs.map((job, index) => (

                    <GridContainer justify="center" key={index}>
                      <Card>
                        <CardBody style={{ backgroundColor: "#F5F5F5" }}>
                          <h3 className={classes.cardSubtitle}>{job.jobTitle}</h3>
                          <hr></hr>
                          <h6 className={classes.cardSubtitle}>Project Description</h6>
                          <p>{job.jobDescription}</p>
                          <br></br>
                          <h6 className={classes.cardSubtitle}>Project Compensation</h6>
                          <p>{job.jobCompensation}</p>
                          <br></br>

                          <h6 className={classes.cardSubtitle}>Created by:</h6>
                          <Link to={"/profile-page/" + job.user[0]._id}>
                            <p>{job.user[0].name}</p>
                          </Link>
                          <hr></hr>
                          <h6 className={classes.cardSubtitle}>Email If Interested:</h6>
                          <p><a href={"mailto:" + job.user[0].email}>{job.user[0].email}</a></p>
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


