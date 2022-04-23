import * as actionTypes from "./actionTypes";
import axios from "axios";

import env from "react-dotenv";

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token: token,
            userId: userId
        }
    }
}

export const auth = (email, password, mode) => dispatch =>{
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true,
    }

    let authUrl = null;

    if(mode === "register") {
        authUrl="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    }
     else {
        authUrl="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    }

    let API_KEY= env.API_KEY;

    axios.post( authUrl + API_KEY, authData )
        .then(response=> {
            if(response.status === 200) {
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId);
                const expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('expirationTime', expirationTime);
                dispatch(authSuccess( response.data.idToken, response.data.localId ));
            }
        })
        .catch(err=> console.log(err.response))
}

export const authCheck = () => dispatch => {
    const token = localStorage.getItem('token')
    if(!token) {
        // logout

    } else {
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if(expirationTime <= new Date()) {
            // logout
        } else {
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(token, userId))
        }
    }
}