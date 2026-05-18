import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import clientReducer from "./clientReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;
