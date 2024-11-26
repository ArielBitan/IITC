import { createStore } from "redux";
import { storeReducer } from "./storeReducers.js";

export const store = createStore(storeReducer);
