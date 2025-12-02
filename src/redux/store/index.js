import { createStore } from "redux";
import reducers from "../reducer";

const devtools =
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f;

const store = createStore(reducers, {}, devtools);

export default store;
