import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
 
import reportWebVitals from "./reportWebVitals";
import { Provider, store } from "react-redux";
import { Store } from "./Redux/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <reportWebVitals>
       
        <App />
       
    </reportWebVitals>
  </Provider>
);
reportWebVitals();
