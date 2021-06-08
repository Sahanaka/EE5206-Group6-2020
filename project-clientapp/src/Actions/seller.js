import axios from 'axios';

import { setAlert } from './alert';
import {
    GET_PRODUCTS,
    PRODUCTS_ERROR
  } from "./types";

const BASE_URL = process.env.REACT_APP_DEV_API_URL + 'seller';

export const getAllProducts = () => async dispatch => {
    try {
        const res = await axios.get(BASE_URL);

        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        });
        return res.data;
        

    } catch (error) {
        setAlert("No products to sell", "warning");
        dispatch({
            type: PRODUCTS_ERROR,
            payload: { msg: error }
        });
        
    }
};

export const addNewProduct = () => async dispatch => {
    try {
        const res = await axios.post(BASE_URL);
    } catch (error) {
       // dispatch(setAlert("Something went wrong!", "danger"));
    }
};

