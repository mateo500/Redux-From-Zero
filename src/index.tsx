import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Redux } from "./state-manager/dist";
import counterReducer from "./counterStore";

const Provider = Redux.Provider;

const rootReducer = Redux.combineReducers({
  counterReducer,
});

const store = Redux.createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
