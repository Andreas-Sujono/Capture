import React, { Component } from 'react';
import {firebase} from "../config/fbConfig"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class Login extends Component {

    state = { isSignedIn: false }

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
        signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })
    }

    render() {
        return (
            <div className="login">
                <h2>Login</h2>

                <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                />
                
            </div>
        );
    }
}

export default Login;