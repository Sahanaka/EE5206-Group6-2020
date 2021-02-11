import axois from 'axios';

import { REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED, AUTH_ERROR, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from './types';
import { setAlert } from './alert';

export const login =  (email, password) => async dispatch => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axois.post("https://localhost:5001/api/LogSignUp/login", body, config);
         
        dispatch(setAlert("Login Successfull", "success"));
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
         
    } catch (error) {
        dispatch(setAlert("Invalid email or password", "danger"));
        dispatch({
            type: LOGIN_FAILED
        });
        
    }
    

};


export const registerCustomer = (name, email, address, Contatct_No, password, ReTypePassword) => async dispatch => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ name, email, address, Contatct_No, password, ReTypePassword });

    try {
        const res = await axois.post("https://localhost:5001/api/LogSignUp/signup/customer", body, config);
        console.log("Success");
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

    } catch (error) {
        const errors = error.response.data.errors;
        console.log(error);
        dispatch(setAlert("Something wrong at your end", "danger"));
        dispatch({
            type: REGISTER_FAIL
        });
    }

};