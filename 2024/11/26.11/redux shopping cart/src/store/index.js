import { createStore } from "redux";
import { cartReducer } from "./cartReducers";

export const store = createStore(cartReducer);
