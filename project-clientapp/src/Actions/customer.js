import axios from "axios";

import { setAlert } from "./alert";
import {
  GET_SHOPS,
  SHOPS_ERROR,
  GET_SELLER,
  CLEAR_SELLER,
  GET_PRODUCTS,
  PRODUCTS_ERROR,
} from "./types";

const BASE_URL = process.env.REACT_APP_DEV_API_URL + "/CustomerModels";

export const getShops = () => async (dispatch) => {
  console.log(BASE_URL)
  try {
    const res = await axios.get(BASE_URL + `/shops`);
    console.log("all shops", res.data);
    dispatch({
      type: GET_SHOPS,
      payload: res.data,
    });
    return res.data;
  } catch (error) {
    setAlert("No products to sell", "warning");
    console.log(error);
    dispatch({
      type: SHOPS_ERROR,
      payload: { msg: error },
    });
  }
};

export const getShopsByCategory = () => {};

export const getShopById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(BASE_URL + `/shops/${id}`);

    dispatch({
      type: GET_SELLER,
      payload: res.data,
    });
    return res.data;
  } catch (error) {
    setAlert("Something wrong", "danger");
    dispatch({
      type: CLEAR_SELLER,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const getShopProducts = (id) => async (dispatch) => {
  try {
    const res = await axios.get(BASE_URL + `/shops/products/${id}`);
    console.log("res", res.data);

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
    return res.data;
  } catch (error) {
    setAlert("No products to sell", "warning");
    console.log(error);
    dispatch({
      type: PRODUCTS_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const updateProfile = async (
  id,
  customerName,
  customerAddress,
  MobileNo
) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };
  const body = JSON.stringify({
    customerName,
    customerAddress,
    MobileNo,
  });
  console.log(customerName);
  try {
    await axios.put(BASE_URL + `/updateprofile/${id}`, body, config);
    setAlert("Profile update successful", "success");
  } catch (error) {
    console.log("Error", error);
  }
};
