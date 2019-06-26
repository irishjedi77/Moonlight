import React from "react";
// @material-ui/core components
import { Link, Redirect, Route } from "react-router-dom";
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
import TextField from '@material-ui/core/TextField';
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";



import image from "assets/img/computer.jpg";
import API from "../../../utils/API"

class Dashboard extends React.Component {

  state = {
    cardAnimaton: "cardHidden",
    name: "",
    phone: "",
    description: "",
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/profile-page' />
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

    // const newUser = {
    //   name: this.state.name,
    //   phone: this.state.phone,
    //   description: this.state.description
    // };
    // console.log(newUser);
    this.setRedirect()

    API.userUpdate({
       
      name: this.state.name,
      phone: this.state.phone,
      description: this.state.description
    
  })
    .then(res => console.log(res))
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
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Dashboard</h4>
                      <div className={classes.socialLine}>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}></p>
                    <CardBody>
                      {/* <form noValidate onSubmit={this.onSubmit}> */}
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
                      <TextField
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        id="outlined-multiline-static"
                        label="Project Description"
                        multiline
                        rows="4"
                        placeholder="Describe your project here."
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        inputProps={{
                          type: "description",
                          name: "description",
                          onChange: this.handleInputChange
                        }}
                      />
                      {/* </form> */}
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <div>
                      {this.renderRedirect()}
                        <Button
                          simple color="primary" size="lg"
                          className="submit"
                          type="submit"
                          onClick={this.onSubmit}
                        >
                          Submit
                    </Button>
                      </div>
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




export default withStyles(loginPageStyle)(Dashboard);
