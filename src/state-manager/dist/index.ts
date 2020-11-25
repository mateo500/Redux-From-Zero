import { connect } from "./connect";
import { combineReducers } from "./combineReducers";
import { createStore } from "./createStore";
import { Provider } from "./Provider";

export const Redux = {
  createStore: createStore,
  combineReducers: combineReducers,
  connect: connect,
  Provider: Provider,
};
