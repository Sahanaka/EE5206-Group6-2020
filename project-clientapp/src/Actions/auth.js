import axios from "axios";

import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_PRODUCTS,
  CLEAR_SELLER,
  CLEAR_SELLERS,
} from "./types";
import { setAlert } from "./alert";

const defaultImageSource = "/img/images.png";
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "https://localhost:5001/api/LogSignUp/login",
      body,
      config
    );

    dispatch(setAlert("Login Successfull", "success"));
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    dispatch(setAlert("Invalid email or password", "danger"));
    dispatch({
      type: LOGIN_FAILED,
    });
  }
};

export const registerCustomer = (
  name,
  email,
  address,
  Contatct_No,
  password,
  ReTypePassword
) => async (dispatch) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  const body = JSON.stringify({
    name,
    email,
    address,
    Contatct_No,
    password,
    ReTypePassword,
  });



  try {
    const res = await axios.post(
      "https://localhost:5001/api/LogSignUp/signup/customer",
      body,
      config
    );
    console.log("Success");
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
    dispatch(setAlert("Something is wrong at your end", "danger"));
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const registerSeller = (
  ImageData,
  defaultImageSource,
  name,
  email,
  address,
  ContatctNo,
  password,
  ReTypePassword,
  Cetogory
) => async (dispatch) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  const body = JSON.stringify({
    name,
    email,
    address,
    ContatctNo,
    password,
    ReTypePassword,
    Cetogory,
  });

  var formData = new FormData();

  formData.append("Name",name);
  formData.append("Address",address);
  formData.append("ContatctNo",ContatctNo);
  formData.append("Email",email);
  formData.append("ImageData",defaultImageSource);
  formData.append("ImageData", ImageData);
  formData.append("Password",password);
  formData.append("ReTypePassword",ReTypePassword);
  formData.append("Cetogory",Cetogory);
  


  try {
    const res = await axios.post(
      "https://localhost:5001/api/LogSignUp/signup/seller",
       formData,
       { "Content-Type": "multipart/form-data" },
    );
    console.log("SuccessForm Data");
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
    dispatch(setAlert("Something is wrong at your end", "danger"));
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) { 
    const user = JSON.parse(atob(localStorage.token.split(".")[1])); 
    if (user.role === "Customer") {
      try {
        const res = await axios.get(
          `https://localhost:5001/api/CustomerModels/${user.id}`
        );
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      } catch (error) {
        console.error(error);
        dispatch({ type: AUTH_ERROR });
      }
    }
    else if (user.role === "Seller") {
      try {
        const res = await axios.get(
          `https://localhost:5001/api/Seller/${user.id}`
        );
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      } catch (error) {
        console.error(error);
        dispatch({ type: AUTH_ERROR });
      }
    }
  }
  else {
    dispatch({ type: AUTH_ERROR })
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PRODUCTS });
  dispatch({ type: CLEAR_SELLER });
  dispatch({ type: CLEAR_SELLERS });
  dispatch({ type: LOGOUT });
};
