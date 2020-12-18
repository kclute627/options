import axios from "axios";
import { keys } from "../config/keys";
import {
  GET_CURRENT_STOCK,
  CURRENT_STOCK_REQUEST,
  GET_CURRENT_STOCK_ERROR
} from "../constants/stockDataConstants";

export const autoCompleteStock = (text) => async (dispatch) => {
  try {
    dispatch({
      type: CURRENT_STOCK_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${text}&apikey=${keys.STOCK_API}`
    );

    
    let newData = data.bestmatches.filter(obj => obj['4. region'] === 'United States')

    dispatch({
      type: GET_CURRENT_STOCK,
      payload: newData, 
    });
  } catch (error) {
    dispatch({
        type: CURRENT_STOCK_REQUEST,
      });
      
      dispatch({
        type: GET_CURRENT_STOCK_ERROR,
        payload: error
      });

  }
};
