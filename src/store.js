/** @format */
import { createStore } from "redux";
import RootReducers from "./Reducers";
const store = createStore(
  RootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
