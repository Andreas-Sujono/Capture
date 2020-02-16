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
        })
    }

    render() {
        return (                
                <div className="login">
                    <button type="button" className="btn btn-primary loginButton" data-toggle="modal" data-target="#exampleModalScrollable">
                        Login / SignUp
                    </button>

                    <div className="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="modalTitle" style={{textAlign:'center'}}>Login/SignUp</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input type="text" class="form-control" id="unameBar"  placeholder="Username"/>
                            <input type="text" class="form-control" id="emailBar"  placeholder="E-mail"/>
                            <input type="text" class="form-control" id="passBar"  placeholder="Password"/>
                            <StyledFirebaseAuth
                                uiConfig={this.uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Login/SignUp</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
         );
    }
}

export default Login;



