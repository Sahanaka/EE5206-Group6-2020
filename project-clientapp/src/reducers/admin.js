import {
  GET_SELLERS,
  SELLERS_ERROR,
  GET_CUSTOMERS,
  CUSTOMERS_ERROR,
} from "../Actions/types";

const initialState = {
  sellers: [],
  customers: [],
  sellersloading: true,
  customersloading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SELLERS:
      return {
        ...state,
        sellers: payload,
        sellersloading: false,
      };
    case SELLERS_ERROR:
      return {
        ...state,
        error: payload,
        sellersloading: false,
      };
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: payload,
        customersloading: false,
      };
    case CUSTOMERS_ERROR:
      return {
        ...state,
        error: payload,
        customersloading: false,
      };
    default:
      return state;
  }
}
