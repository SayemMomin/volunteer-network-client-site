import React, { useState, useContext } from 'react';
import firebaseConfig from './firebase.confiq';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
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
            //storeAuthToken()
            history.replace(from);
            console.log('email ok')
        })
    }
    return (
        <div className="d-flex justify-content-center">
            <button onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
    );
};

export default Login;