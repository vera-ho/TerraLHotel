import React from "react";
import { createRoot } from "react-dom/client"
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // Render Application
  root.render(<Root store={store} />)
});