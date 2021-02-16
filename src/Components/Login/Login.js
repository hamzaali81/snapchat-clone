import { Button } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { auth, provider } from '../../firebase';
import { login } from "../../features/appSlice";
import React from 'react';
import './login.css';

function Login() {

    const dispatch = useDispatch();

    const signIn = ()=> {
  auth.signInWithPopup(provider)
        .then( (result)=> {
            dispatch(
                login({
                    username: result.user.displayName,
                    profilePic: result.user.photoURL,
                    id: result.user.id
                })
            )
    
        })
        .catch(function (error) {
           alert(error.message)
        });
    }


    return (
        <div className="login">
            <div className="login__container">
                <img src="https://www.snapchat.com/global/social-lg.jpg" alt="" srcset=""/>
                <Button variant="outlined" onClick={signIn}>Sign in</Button>
            </div>
        </div>
    )
}

export default Login;