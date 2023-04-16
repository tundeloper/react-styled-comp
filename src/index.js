import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./component/globals/globalStyles";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

reportWebVitals();
