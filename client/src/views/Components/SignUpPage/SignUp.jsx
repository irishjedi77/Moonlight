import React from "react";
import { Link, Redirect} from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";


import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/keyboard.jpg";
import API from "../../../utils/API"

class LoginPage extends React.Component {
  state = {
    cardAnimation: "cardHidden",
    name: "",
    email: "",
    password: "",
    password2: "",
    phone: "",
    description: "",
    errors: {},
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
    console.log("SetRedirect is firing")
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/profile-page' />
    }
    console.log("renderRedirect is firing")
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    //console.log(event.target)
  };


  onChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value });

  }

  onSubmit = event => {
    event.preventDefault();


    API.userSignUp(this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
      this.setRedirect();

  };



  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(() => {
      this.setState({ cardAnimaton: "" });
    },
      700
    );
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Moonlight"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Sign Up</h4>
                      <br></br>
                      <br></br>

                    </CardHeader>
                    <p className={classes.divider}></p>
                    <CardBody>
                      <form>
                        <CustomInput
                          value={this.state.email}
                          onChange={this.handleInputChange}
                          labelText="Email..."
                          id="email"
                          name="email"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "email",
                            name: "email",
                            onChange: this.handleInputChange,
                            endadornment: (
                              <InputAdornment position="end">
                                <Email className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                        <CustomInput
                          value={this.state.password}
                          onChange={this.handleInputChange}
                          labelText="Password..."
                          id="password"
                          name="password"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "password",
                            name: "password",
                            onChange: this.handleInputChange,
                            endadornment: (
                              <InputAdornment position="end">
                                <Icon className={classes.inputIconsColor}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            )
                          }}
                        />
                        <CustomInput
                          value={this.state.password2}
                          onChange={this.handleInputChange}
                          labelText="Confirm Password..."
                          id="password2"
                          name="password"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "password",
                            name: "password2",
                            onChange: this.handleInputChange,
                            endadornment: (
                              <InputAdornment position="end">
                                <Icon className={classes.inputIconsColor}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            )
                          }}
                        />
                        <CardFooter className={classes.cardFooter}>
                        <div>{this.renderRedirect()}
                        <Button
                          simple color="primary" size="lg"
                          type="submit"
                          onClick={this.onSubmit}>
                          Submit
                        </Button>
                        </div>
                        </CardFooter>
                      </form>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg">
                        Get started
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);