import {
  GET_CURRENT_STOCK,
  GET_CURRENT_STOCK_ERROR,
  CURRENT_STOCK_REQUEST,
} from "../constants/stockDataConstants";

const initialState = {
  stockAutoList: [],
  loading: true,
};

export const stockDataReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case CURRENT_STOCK_REQUEST:
      return { ...state, loading: true };
    case GET_CURRENT_STOCK:
      return {
        ...state,

        stockAutoList: [...payload],
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
