import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import ClientJobs from "../Clients/ClientJobs.jsx";

//API
import API from "../../../utils/API"

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {
  state = {
    jobs: []

  }

  componentDidMount() {
    this.loadJobs();
  }

  loadJobs = () => {
    API.getJobs()
      .then(res =>
        this.setState({ jobs: res.data })
      )
      .catch(err => console.log(err));
  };
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Moonlight"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/stretch.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Jobs by Client</h1>
                  <h3 className={classes.subtitle}>
                    Search available opportunities.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <GridContainer>
          <GridItem>
          <ClientJobs />
          </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}



export default withStyles(componentsStyle)(Components);
