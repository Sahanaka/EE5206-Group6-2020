import axios from 'axios';

import { setAlert } from './alert';
import {
    GET_PRODUCTS,
    PRODUCTS_ERROR
  } from "./types";

export const getAllProducts = sellerId => async dispatch => {
    try {
        const res = await axios.get(`https://localhost:5001/api/seller/${sellerId}`);

        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        });
        return res.data;
        

    } catch (error) {
        setAlert("No products to sell", "warning");
        dispatch({
            type: PRODUCTS_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
        
    }
};

export const addNewProduct = () => async dispatch => {
    try {
        const res = await axios.post('"https://localhost:5001/api/seller');
    } catch (error) {
       // dispatch(setAlert("Something went wrong!", "danger"));
    }
};

