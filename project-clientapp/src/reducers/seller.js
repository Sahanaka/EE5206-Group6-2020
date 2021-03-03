import { GET_SELLERS, SELLERS_ERROR } from "../Actions/types";

const initialState = {
  shops: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SELLERS:
      return {
        ...state,
        shops: payload,
        loading: false,
      };
    case SELLERS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
