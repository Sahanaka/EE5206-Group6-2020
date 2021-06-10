import axios from 'axios';

import { setAlert } from './alert';
import {
    GET_PRODUCTS,
    PRODUCTS_ERROR,
    SELLER_DASHBOARD,
    SELLER_DASHBOARD_ERROR
  } from "./types";

const BASE_URL = process.env.REACT_APP_DEV_API_URL + '/seller';

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

// export const getDashboardDetails = (id) => async dispatch => {
//     try {
//         const res = await axios.get(BASE_URL + `details/${id}`)
//         dispatch({
//             type: SELLER_DASHBOARD,
//             payload: res.data
//         });
//     } catch (error) {
//         console.log("Dashboard Error", error);
//         dispatch({
//             type: SELLER_DASHBOARD_ERROR,
//             payload: error
//         });
//     }
// };

export const getDashboardDetails = async (id) => {
    try {
        const res = await axios.get(BASE_URL + `/details/${id}`);
        //const res = await axios.get(`https://localhost:5001/api/seller/details/${id}`);
        return res.data[0];
    } catch (error) {
        console.log("Dashboard Error", error);
    }
};

