import { GET_PRODUCTS, PRODUCTS_ERROR, CLEAR_PRODUCTS } from "../Actions/types";

const initialState = {
  products: [],
  productLoading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        productLoading: false,
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        products: [],
        productLoading: true,
      };
    case PRODUCTS_ERROR:
      return {
        ...state,
        error: payload,
        productLoading: false,
      };
    default:
      return state;
  }
}
