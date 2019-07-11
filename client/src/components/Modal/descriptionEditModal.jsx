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
        description: "",
        modal: false,

    };

    componentDidMount() {
        this.changeDescription()
    }

    changeDescription = () => {
       
        window.setTimeout(() => {
            this.state.description= this.props.profile.description
            console.log("hello gov", this.props.profile.description)}, 500)

    
    }
    

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = () => {
        //event.preventDefault();

        const data = {
            description: this.state.description, 
            token: this.context.authToken
        }

        API.updateDescription(data)
            .then((res) => {
                console.log(this.state)
                this.props.loadProfile()
        
            })
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
                    Edit Description
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
                        <h3 className={classes.modalTitle}>Change Name!</h3>
                    </DialogTitle>
                    <DialogContent
                        id="modal-slide-description"
                        className={classes.modalBody}>
                        <form>
                        <TextArea
                                value={this.state.description}
                                onChange={this.handleInputChange}
                                name="description"
                                //placeholder="Edit Description"
                            />
                            <Button
                                color="info"
                                onClick={() => {
                                    this.handleClose("modal")
                                    this.handleFormSubmit()
                                
                                }}

                            >
                                Change Description!
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