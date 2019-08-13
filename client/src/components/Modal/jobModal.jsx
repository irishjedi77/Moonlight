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
import { Input, TextArea} from "../Form";
import API from "../../utils/API"
import { LoginContext } from "../Context/loginContext.js";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});



class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitle: "",
            jobDescription: "",
            jobCompensation: "",
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
        //event.preventDefault();

        API.saveJob({
            jobTitle: this.state.jobTitle,
            jobDescription: this.state.jobDescription,
            jobCompensation: this.state.jobCompensation,
            token: this.context.authToken
        })
            .then((res) => {
                //console.log(res)
                this.props.loadJobs()
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
                    Create a Project!
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
                        <h3 className={classes.modalTitle}>Create a project</h3>
                    </DialogTitle>
                    <DialogContent
                        id="modal-slide-description"
                        className={classes.modalBody}>
                        <form>
                            <Input
                                value={this.state.jobTitle}
                                onChange={this.handleInputChange}
                                name="jobTitle"
                                placeholder="Project Title (Required)"
                            />
                            <TextArea
                                value={this.state.jobDescription}
                                onChange={this.handleInputChange}
                                name="jobDescription"
                                placeholder="Job Description (Required)"
                            />
                            <TextArea
                                value={this.state.jobCompensation}
                                onChange={this.handleInputChange}
                                name="jobCompensation"
                                placeholder="Compensation details (Required)"
                            />
                            <Button
                                color="info"
                                onClick={() => {
                                    this.handleClose("modal")
                                    this.handleFormSubmit()
                                }}
                            >
                                Submit Job
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

Modal.contextType = LoginContext;
export default withStyles(modalStyle)(Modal);