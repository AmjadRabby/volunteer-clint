import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import logo from '../../images/Group 1329.png'
import google from '../../images/google.png'

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
          .catch(error => console.log(error));
    }

    return (
      <div className="">
        <img className="login-logo d-flex align-items-center mb-5" src={logo} alt=""/>
       
              <div className='w-50 text-center mx-auto border border-secondary py-3 px-4 bg-light rounded mb-5 login-container '>
                <h4 className='mb-5 mt-5'>Login Width</h4>   

                <div style={{cursor:'pointer', width: '300px'}} onClick={handleGoogleSignIn} className='border border-secondary d-flex justify-content-center align-items-center py-1 w-50 mx-auto rounded-pill mb-2' >
                    <img className='mx-2 mr-auto'  src={google}  style={{width:'30px'}}  alt=""/>
                    <p className='mb-0 m-auto'>Continue with Google</p>
                </div>
                <p> <span style={{cursor:'pointer'}} >Don't have an account? <a href=""> Create an account </a></span></p> 
                
            </div >
      </div>
    );
};

export default Login;