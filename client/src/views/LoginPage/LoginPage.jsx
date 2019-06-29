import React from "react";
// @material-ui/core components
import { Link, Redirect } from "react-router-dom";
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
import API from "../../utils/API";
import { LoginContext } from "../../components/Context/loginContext.js";

class LoginPage extends React.Component {


  state = {
    cardAnimaton: "cardHidden",
    email: "",
    password: "",
    errors: {},
    redirect: false,
    name: "", 
    token: ""
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
    //console.log("SetRedirect is firing")
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={'/profile-page/' + this.context.loggedInUser} />
    }
    //console.log("renderRedirect is firing")
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = (event, context) => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    //console.log(user);
    API.userLogin(user)
      .then(({ data }) => {
        
        this.setState({
           name: data.user.name, 
           token: data.token
         })
        console.log(data)
        
      })
      .then(() =>{
        this.context.changeLoggedInUser(this.state.name)
        this.context.changeToken(this.state.token)
        this.context.changeLoggedIn()
        this.setRedirect()
        
      })
      .catch(err => console.log(err));

  };



  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  //static contextType = LoginContext
  render() {
    //const {loggedInUser, changeLoggedInUser} = this.context

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
                    <CardHeader color="info" className={classes.cardHeader}>
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        <br></br>
                        <br></br>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}></p>
                    <CardBody>
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
                      <CardFooter className={classes.cardFooter}>
                        <LoginContext.Consumer>
                          {data => {
                            return (
                              <div>
                                {this.renderRedirect()}
                                <Button
                                  simple color="info" size="lg"
                                  type="submit"
                                  onClick={e => this.onSubmit(e, data)}
                                >
                                  Login
                            </Button>
                              </div>
                            )

                          }}
                        </LoginContext.Consumer>
                      </CardFooter>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Link to="/signup-page">
                        <Button simple color="info" size="sm">Don't have a login? Sign up here.
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

LoginPage.contextType = LoginContext

export default withStyles(loginPageStyle)(LoginPage);
