import axios from 'axios';

import { setAlert } from './alert';
import {
    GET_SELLERS,
    SELLERS_ERROR,
    GET_SELLER,
    CLEAR_SELLER,
    GET_PRODUCTS,
    PRODUCTS_ERROR
  } from "./types";

export const getShops = () => async dispatch => {
    try {
        const res = await axios.get(`https://localhost:5001/api/CustomerModels/shops`);
        console.log('all shops', res.data)
        dispatch({
          type: GET_SELLERS,
          payload: res.data,
        });
        return res.data;
    } catch (error) {
        setAlert("No products to sell", "warning");
        console.log(error)
        dispatch({
            type: SELLERS_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
};

export const getShopsByCategory = () => {
    
};

export const getShopById = (id) => async dispatch => {
    try {
        const res = await axios.get(`https://localhost:5001/api/CustomerModels/shops/${id}`);
        
        dispatch({
          type: GET_SELLER,
          payload: res.data,
        });
        return res.data
    } catch (error) {
        setAlert("Something wrong", "danger");
        dispatch({
            type: CLEAR_SELLER,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}

export const getShopProducts = (id) => async dispatch => {
    try {
        const res = await axios.get(`https://localhost:5001/api/CustomerModels/shops/products/${id}`);
        console.log('res', res.data);

        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        });
        return res.data;
    } catch (error) {
        setAlert("No products to sell", "warning");
        console.log(error)
        dispatch({
            type: PRODUCTS_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
};