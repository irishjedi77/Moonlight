import React, { Component, createContext } from "react";

export const LoginContext = createContext();


export class UserProvider extends Component {

    state = {
        otherUser: "",
        loggedInUser: "",
        authToken: "", 
        loggedIn: false, 

    }
    changeLoggedInUser = this.changeLoggedInUser.bind(this)
    changeLoggedIn = this.changeLoggedIn.bind(this)
    changeToken = this.changeToken.bind(this)

    changeLoggedInUser(user){
        this.setState({loggedInUser: user}) 
        //console.log("CONTEXT LOGGEDINUSER:", this.state.loggedInUser)
    }
    changeToken(token){
        this.setState({authToken: token})
        //console.log("Auth Token: ", this.state.authToken)
    }

    changeLoggedIn(){
        this.setState({loggedIn: !this.state.loggedIn})
        //console.log("CONTEXT LOGGEDIN true or false?:", this.state.loggedIn)
    }

   
    
    render() {
        return (

            <LoginContext.Provider 
            value={{ 
                ...this.state, 
                changeLoggedInUser: this.changeLoggedInUser,
                changeLoggedIn: this.changeLoggedIn,
                changeToken: this.changeToken
            
            }}
            
            >
                {this.props.children}
            </LoginContext.Provider>

        );
    }

}