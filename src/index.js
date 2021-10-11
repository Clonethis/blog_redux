import React from "react";
import ReactDom from "react-dom";
// provider is to bridge connection between react and redux
import { Provider } from "react-redux";
// create store is purely redux stuff
import { createStore, applyMiddleware } from "redux";
// helps with async data passing
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";
const store = createStore(reducers, applyMiddleware(thunk));
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
