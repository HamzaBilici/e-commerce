import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Gelecekte buraya yeni reducer'lar ekleyebilirsiniz:
  // user: userReducer,
});

export default rootReducer;