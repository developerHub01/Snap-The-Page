import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainRouter from "./Routers/MainRouter.jsx";
import LoadingProvider from "./CustomProvider/LoadingProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoadingProvider>
      <MainRouter />
    </LoadingProvider>
  </React.StrictMode>
);
