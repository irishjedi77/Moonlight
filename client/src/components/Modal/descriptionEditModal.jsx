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
import CustomInput from "components/CustomInput/CustomInput.jsx";
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});



class Modal extends React.Component {

    state = {
        avatar: "",
        name: "",
        phone: "",
        email: "", 
        description: "",
        modal: false,

    };

    componentDidMount() {
        this.changeDescription()
    }

    changeDescription = () => {

        window.setTimeout(() => {
            this.state.avatar = this.props.profile.avatar
            this.state.name = this.props.profile.name
            this.state.phone = this.props.profile.phone
            this.state.email = this.props.profile.email
            this.state.description = this.props.profile.description
            console.log("hello gov", this.props.profile)
        }, 500)


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
            avatar: this.state.avatar, 
            name: this.state.name, 
            phone: this.state.phone, 
            email: this.state.email, 
            description: this.state.description,
            token: this.context.authToken
        }

        API.updateProfile(data)
            .then((res) => {
                //console.log(this.state)
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
                    Edit Profile
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
                        {/* <form> */}
                        {/* <TextArea
                                value={this.state.description}
                                onChange={this.handleInputChange}
                                name="description"
                                //placeholder="Edit Description"
                            /> */}

                        <div className="form-group">
                            <select name="avatar" style={{ marginLeft: "50px", width: "200px", color: "#00bcd4", fontSize: "11pt" }} value={this.state.avatar} onChange={this.handleInputChange.bind(this)}>
                                <option value="https://i.imgur.com/NuwNf2F.jpg">Wolf Moon</option>
                                <option value="https://i.imgur.com/CSBTdCX.jpg">Blue Moon</option>
                                <option value="https://i.imgur.com/1d1wFqf.jpg">Grassy Moon</option>
                                <option value="https://upload.wikimedia.org/wikipedia/en/9/9b/Yoda_Empire_Strikes_Back.png">Full Yoda</option>
                            </select>
                        </div>

                        <CustomInput
                            value={this.state.name}
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
                            labelText="Email"
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
                            value={this.state.phone}
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
                        <div>
                            <Button
                                color="info"
                                onClick={() => {
                                    this.handleClose("modal")
                                    this.handleFormSubmit()

                                }}

                            >
                                Update Profile
                            </Button>
                        </div>
                        {/* </form> */}
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