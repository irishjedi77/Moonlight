import React from "react";
// @material-ui/core components
import { Link } from "react-router-dom";
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

class LoginPage extends React.Component {
  
  state = {
    cardAnimaton: "cardHidden", 
    email: "", 
    password: "", 
    errors: {}
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(event.target)
  };

  onSubmit = event => {
    event.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(newUser);
  };

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
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
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        <br></br>
                        <br></br>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}></p>
                    <CardBody>
                    <form noValidate onSubmit={this.onSubmit}>
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
                            endAdornment: (
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
                            endAdornment: (
                              <InputAdornment position="end">
                                <Icon className={classes.inputIconsColor}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            )
                          }}
                        />
                        
                        <Button
                          simple color="primary" size="lg" 
                          type="submit"                         
                          onClick={this.onSubmit}
                          >
                          Log in!
                        </Button>
                      </form>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                    <Link to="/signup-page">
                      <Button simple color="primary" size="lg">Login
                      </Button>
                      </Link>
                    </CardFooter>
                    <CardFooter className={classes.cardFooter}>
                    <Link to="/signup-page">
                      <Button simple color="primary" size="sm">Don't have a login? Sign up here.
                      </Button>
                      </Link>
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
