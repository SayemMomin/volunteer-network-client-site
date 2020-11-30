import React, { useState, useContext } from 'react';
import firebaseConfig from './firebase.confiq';
import { UserContext } from '../../App';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import logo from '../../Images/logo.png';
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'
var firebase = require('firebase/app');
require('firebase/auth');

firebase.initializeApp(firebaseConfig);

const Login = () => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photo: '',
        password: ''
      })

      const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
      


      const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then((res) => {
          const {displayName, email, photoURL} = res.user
            const userSignIn ={
              isSignIn: true,
              name: displayName,
              email: email,
              photo: photoURL
            }
            setUser(userSignIn)
            setUserLoggedIn(userSignIn)
            history.replace(from);
            console.log('email ok')
        })
    }
    return (
      <div id= "parent">
            
      <img src={logo} alt="" width="150px" />
          <Form className="login-form" >
              <h4 style={{ textAlign: "left", paddingBottom: "20px", fontWeight: "bold" }}>Login</h4>
              <p style={{ color: "red" }}>  </p>


              <Button id="sigining-btn" variant="light" onClick={handleGoogleSignIn} >
                  <FcGoogle style={{ fontSize: "36px" }}/> 
                  Continue With Facebook
                </Button>
                <h6 style={{marginTop:"15px"}}>Dont have an account ?? 
              <Link to="">
                      <span>  Create an account</span>
              </Link>
              </h6>

          </Form>

      </div>
    );
};

export default Login;