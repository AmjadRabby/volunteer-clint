import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInVolunteer, setLoggedInVolunteer] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


      if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => {           
            const {displayName, email} = result.user;
            const signInUser = {name: displayName, email};
            setLoggedInVolunteer(signInUser);
            history.replace(from)
          })
          .catch(error =>  {
            const errorMessage = error.message;
    
          });
    }



    return (
        <div>
            <h4>This is Login</h4>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;