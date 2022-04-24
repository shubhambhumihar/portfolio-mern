import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import store from "./Store";

// ! ReactDOM.render(kya render karna hai ,aur kaha renr karna hai)
const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
