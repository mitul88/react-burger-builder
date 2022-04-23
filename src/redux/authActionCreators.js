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
            console.log(response)
        })
        .catch(err=> console.log(err.response))
}