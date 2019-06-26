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

import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/christian.jpg";
import Modal from "../../components/Modal/jobModal.jsx"



import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
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
                      <h3 className={classes.title}>Employee Title</h3>

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
                <p>
                  Employer Description paragraph:


                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
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
              <br></br>
              <p>Email</p>
              <p>Phone Number</p> 
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

                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              Postings will go Here
              </div>

          </div>
          <br></br>
          <br></br>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
              <div className={classes.description}>
              <Modal 
                
              />
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

export default withStyles(profilePageStyle)(ProfilePage);
