import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./src/App.jsx";
// import App from "./src/App-v1.jsx";
// import App from "./src/App-v2.jsx";
// import App from "./src/App-v3.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
