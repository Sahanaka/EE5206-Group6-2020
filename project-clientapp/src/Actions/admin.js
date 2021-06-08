import axios from "axios";

import {
  GET_SELLERS,
  SELLERS_ERROR,
  GET_CUSTOMERS,
  CUSTOMERS_ERROR,
} from "./types";

const BASE_URL = process.env.REACT_APP_DEV_API_URL + "/admin";

export const getDashboardData = async () => {
  try {
    const res = await axios.get(BASE_URL + "/details");
    return res.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const getSellers = () => async (dispatch) => {
  try {
    const res = await axios.get(BASE_URL + "/details/sellers");
    console.log("ssssssssssssss", res);
    dispatch({
      type: GET_SELLERS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    // dispatch({
    //     type: SELLERS_ERROR,
    //     payload: { error }
    // });
  }
};

export const getCustomers = () => async (dispatch) => {
  try {
    const res = await axios.get(BASE_URL + "/details/customers");
    dispatch({
      type: GET_CUSTOMERS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    // dispatch({
    //     type: CUSTOMERS_ERROR,
    //     payload: { error }
    // });
  }
};

export const deleteCustomer = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + `/cusotmer/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSeller = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + `/seller/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
