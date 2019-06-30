import React from 'react';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.jsx";
import modalStyle from "../../assets/jss/material-kit-react/modalStyle.jsx";
import { Input, TextArea, FormBtn } from "../Form";
// import API from "../../utils/API"
// import { LoginContext } from "../Context/loginContext.js";

//mailgun

const mailgun = require("mailgun-js");
const DOMAIN = process.env.REACT_APP_DOMAIN;
const mg = mailgun({apiKey: process.env.REACT_APP_API_KEY, domain: process.env.REACT_APP_DOMAIN});




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});



class Modal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        title: "irishjedi77@me.com",
        contact: "",
        subject: "",
        message: "",
        modal: false,

    };
}
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        const data = {
            from: this.state.title,
            to: this.state.contact, 
            subject: this.state.subject, 
            text: this.state.message
          };

        mg.messages().send(data, (error, body) => {
            console.log(body);
          });

    }

    handleClickOpen(modal) {
        var x = [];
        x[modal] = true;
        this.setState(x);
    }
    handleClose(modal) {
        var x = [];
        x[modal] = false;
        this.setState(x);
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button
                    color="info"
                    round
                    onClick={() => this.handleClickOpen("modal")}>
                    Contact This Client
        </Button>
                <Dialog
                    classes={{
                        root: classes.center,
                        paper: classes.modal
                    }}
                    open={this.state.modal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleClose("modal")}
                    aria-labelledby="modal-slide-title"
                    aria-describedby="modal-slide-description">
                    <DialogTitle
                        id="classic-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}>
                        <IconButton
                            className={classes.modalCloseButton}
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={() => this.handleClose("modal")}>
                            <Close className={classes.modalClose} />
                        </IconButton>
                        <h3 className={classes.modalTitle}>Contact this Client</h3>
                    </DialogTitle>
                    <DialogContent
                        id="modal-slide-description"
                        className={classes.modalBody}>
                        <form>
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Name(Required)"
                            />
                            <TextArea
                                value={this.state.subject}
                                onChange={this.handleInputChange}
                                name="subject"
                                placeholder="Subject"
                            />
                            <TextArea
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                name="message"
                                placeholder="Message"
                            />
                            <Button
                                color="info"
                                onClick={this.handleFormSubmit}
                            >
                                Send Message
                            </Button>
                        </form>
                    </DialogContent>
                    <DialogActions
                        className={classes.modalFooter + " " + classes.modalFooterCenter}>

                        {/* <Button
                            onClick={this.handleFormSubmit}
                            color="successNoBackground">
                            Submit
            </Button> */}
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

// Modal.contextType = LoginContext;
export default withStyles(modalStyle)(Modal);