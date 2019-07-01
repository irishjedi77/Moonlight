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
import API from "../../utils/API"
import { LoginContext } from "../Context/loginContext.js";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});



class Modal extends React.Component {
    
        state = {
        phone: "",
        modal: false,

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        const data = {
            phone: this.state.phone, 
            token: this.context.authToken
        }

        API.updatePhone(data)
            .then(res => console.log(res))
            .catch(err => console.log(err));

        
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
                    Edit Phone Number
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
                        <h3 className={classes.modalTitle}>Change Phone Number!</h3>
                    </DialogTitle>
                    <DialogContent
                        id="modal-slide-description"
                        className={classes.modalBody}>
                        <form>
                            <Input
                                value={this.state.phone}
                                onChange={this.handleInputChange}
                                name="phone"
                                placeholder="Change your phone number!"
                            />
                            <Button
                                color="info"
                                onClick={this.handleFormSubmit}
                            >
                                Change Phone Number!
                            </Button>
                        </form>
                    </DialogContent>
                    <DialogActions
                        className={classes.modalFooter + " " + classes.modalFooterCenter}>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

Modal.contextType = LoginContext;
export default withStyles(modalStyle)(Modal);