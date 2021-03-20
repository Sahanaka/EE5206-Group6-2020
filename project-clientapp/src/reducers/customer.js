import { GET_SELLER, CLEAR_SELLER } from "../Actions/types";

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
    case CLEAR_SELLER:
      return {
        ...state,
        error: payload,
        shopLoading: false,
      };
    default:
      return state;
  }
}
