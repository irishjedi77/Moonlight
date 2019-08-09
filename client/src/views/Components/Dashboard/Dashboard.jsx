import React from "react";
// @material-ui/core components
import { Link, Redirect, Route } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
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
import TextField from '@material-ui/core/TextField';

//styles
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import image from "assets/img/computer.jpg";


//API
import API from "../../../utils/API"
import { LoginContext } from "../../../components/Context/loginContext.js";

class Dashboard extends React.Component {

  state = {
    cardAnimaton: "cardHidden",
    avatar: "https://i.imgur.com/NuwNf2F.jpg",
    name: "",
    phone: "",
    description: "",
    redirect: false,
    _id: "",
    token: ""
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={'/profile-page/' + this.context.loggedInUser} />
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    //console.log(event.target)
  };

  onSubmit = event => {
    event.preventDefault();

    const userInfo = {
      avatar: this.state.avatar,
      name: this.state.name,
      phone: this.state.phone,
      description: this.state.description,
      token: this.context.authToken
    };
    //console.log("Da User infroL ", userInfo);
    // this.setRedirect()

    API.userUpdate(userInfo)
      .then((res) => {
        console.log("update response", res)
        this.context.changeLoggedInUser(res.data._id)
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
                    <CardHeader color="info" className={classes.cardHeader}>
                      <h4>Dashboard</h4>
                      <div className={classes.socialLine}>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}></p>
                    <CardBody>

                      <h5>Choose Your Avatar</h5>
                      <div className="form-group">
                        <select name="avatar" style={{ marginLeft: "50px", width: "200px", color: "#00bcd4", fontSize: "11pt" }} value={this.state.avatar} onChange={this.handleInputChange.bind(this)}>
                          <option value="https://i.imgur.com/NuwNf2F.jpg">Wolf Moon</option>
                          <option value="https://i.imgur.com/CSBTdCX.jpg">Blue Moon</option>
                          <option value="https://i.imgur.com/1d1wFqf.jpg">Grassy Moon</option>
                          <option value="https://upload.wikimedia.org/wikipedia/en/9/9b/Yoda_Empire_Strikes_Back.png">Full Yoda</option>
                        </select>
                      </div>

                      <CustomInput
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        labelText="Name/Organization"
                        id="name"
                        name="name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "name",
                          name: "name",
                          onChange: this.handleInputChange,
                          endadornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        labelText="Phone"
                        id="phone"
                        name="phone"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "phone",
                          name: "phone",
                          onChange: this.handleInputChange,
                          endadornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <TextField style={{ color: "#00bcd4", width: "200px" }}
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        id="outlined-multiline-static"
                        label="Organization Description"
                        multiline
                        rows="4"
                        placeholder="Describe your organization here."
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "description",
                          name: "description",
                          onChange: this.handleInputChange,
                        }}
                      />
                      {/* </form> */}
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <LoginContext.Consumer>

                        {data => {
                          return (

                            <div>
                              {this.renderRedirect()}
                              <Button
                                simple color="info" size="lg"
                                className="submit"
                                type="submit"
                                onClick={e => this.onSubmit(e, data)}
                              >
                                Submit
                                </Button>
                            </div>
                          )
                        }}

                      </LoginContext.Consumer>
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

Dashboard.contextType = LoginContext
export default withStyles(loginPageStyle)(Dashboard);
