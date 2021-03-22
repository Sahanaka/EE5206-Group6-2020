import { GET_SELLER, CLEAR_SELLER, SELLER_ERROR } from "../Actions/types";

const initialState = {
  shop: null,
  shopLoading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SELLER:
      return {
        ...state,
        shop: payload,
        shopLoading: false,
      };
    case SELLER_ERROR:
      return {
        ...state,
        error: payload,
        shopLoading: false,
      };
    case CLEAR_SELLER:
      return {
        ...state,
        shop: null,
        shopLoading: true,
      };
    default:
      return state;
  }
}
