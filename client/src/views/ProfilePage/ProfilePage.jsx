import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { Link } from "react-router-dom";


import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/christian.jpg";
// import modalStyle from "assets/jss/material-kit-react/modalStyle.jsx";
import Modal from "../../components/Modal/jobModal.jsx"
import API from "../../utils/API.js"



import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

import { LoginContext } from "../../components/Context/loginContext.js";

class ProfilePage extends React.Component {

  state = {
    profile: {},
    jobs: {}

  }

  componentDidMount() {
    this.loadJobs();
    this.loadProfile();

  }

  loadProfile = () => {
    console.log("params: ", this.props.match.params.name)
    API.getUserInfo(this.props.match.params.name)
      .then(res =>
        this.setState({ profile: res.data[0] }),
      )
      .catch(err => console.log(err));
  };

  loadJobs = () => {
    API.getJobsByName(this.props.match.params.name, this.context.authToken)
      .then(res =>
        //this.setState({ jobs: res.data }),
        console.log("res", res)
      )
      .catch(err => console.log(err));
  };



  render() {
    //console.log("jobs:", this.state.jobs)
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    //console.log("user info:", this.state.profile)
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>

        <Header
          color="transparent"
          brand="Moonlight"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{this.state.profile.name}</h3>

                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <br></br>
              <br></br>
              <br></br>
              <div className={classes.description}>
                <div className={classes.name}>
                  <h4 className={classes.title}>Employer Description paragraph:</h4>

                </div>
                <p>{this.state.profile.description}</p>
              </div>

            </div>
          </div>
          <br></br>
          <br></br>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.description}>
                  <div className={classes.name}>
                    <h4 className={classes.title}>Contact Info</h4>

                  </div>

                  <h6 className={classes.title}>Email:</h6>
                  <p>{this.state.profile.email}</p>
                  <h6 className={classes.title}>Phone:</h6>
                  <p>{this.state.profile.phone}</p>

                </div>
              </GridItem>
            </GridContainer>

          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Job Postings</h3>
                    <div className="jobsHere">

                      {this.state.jobs.length ? (
                        <div>
                          {this.state.jobs.map(job => (

                            <GridContainer justify="center">
                              <Card>
                                <CardBody style={{ backgroundColor: "#DCDCDC" }}>
                                  <h4 className={classes.cardTitle}>{job.jobTitle}</h4>
                                  <br></br>
                                  <h6 className={classes.cardSubtitle}>Project Description</h6>
                                  <p>{job.jobDescription}</p>
                                  <br></br>
                                  <h6 className={classes.cardSubtitle}>Project Compensation</h6>
                                  <p>{job.jobCompensation}</p>
                                  <br></br>

                                  <h6 className={classes.cardSubtitle}>Created by:</h6>
                                  {/* <Link to={"/profile-page/" + job.user[0].name}>
                                    <p>{job.user[0].name}</p>
                                  </Link> */}

                                </CardBody>
                              </Card>
                            </GridContainer>

                          ))}
                        </div>

                      ) : (
                          <h3>No Results to Display</h3>
                        )}
                    </div>

                  </div>
                </div>
              </GridItem>
            </GridContainer>
            {/* <div className={classes.description}>
              Postings will go Here
              </div> */}

          </div>
          <br></br>
          <br></br>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.description}>
                  {this.props.match.params.name === this.context.loggedInUser && <Modal

                  />}
                  <br></br>
                </div>
              </GridItem>
            </GridContainer>

          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

ProfilePage.contextType = LoginContext;
export default withStyles(profilePageStyle)(ProfilePage);
