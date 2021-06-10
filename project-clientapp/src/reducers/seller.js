import {
  GET_SHOPS,
  SHOPS_ERROR,
  SELLER_DASHBOARD,
  SELLER_DASHBOARD_ERROR,
} from "../Actions/types";

const initialState = {
  shops: [],
  loading: true,
  error: {},
  details: null,
  dashboardError: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SHOPS:
      return {
        ...state,
        shops: payload,
        loading: false,
      };
    case SHOPS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case SELLER_DASHBOARD:
      return {
        ...state,
        details: payload,
      };
    case SELLER_DASHBOARD_ERROR:
      return {
        ...state,
        dashboardError: payload,
      };
    default:
      return state;
  }
}
