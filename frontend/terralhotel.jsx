import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  // for testing only
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // Render Application
  // ReactDOM.render(<h1>Terra L'hotel</h1>, root);
  ReactDOM.render(<Root store={store} />, root);
});