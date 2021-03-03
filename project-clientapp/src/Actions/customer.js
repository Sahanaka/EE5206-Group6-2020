import axios from 'axios';

import { setAlert } from './alert';
import {
    GET_SELLERS,
    SELLERS_ERROR
  } from "./types";

export const getShops = (category) => async dispatch => {
    try {
        const res = await axios.get(`https://localhost:5001/api/CustomerModels`);
        console.log('res', res)
        dispatch({
          type: GET_SELLERS,
          payload: res.data,
        });
        return res.data;
    } catch (error) {
        setAlert("No products to sell", "warning");
        dispatch({
            type: SELLERS_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
};

export const getShopsByCategory = () => {
    
};