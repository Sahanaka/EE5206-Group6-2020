import { GET_PRODUCTS, PRODUCTS_ERROR } from "../Actions/types";

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
