import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextApiRoutes from "./ContextApi/Routes";
import ReduxRoutes from "./Redux/Routes";
import Header from "./Header";
import Home from "./Home";
import ProviderRoutes from "./Provider/Routes";
import ContextApiProviderRoutes from "./ContextApiProvider/Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ctx/*" element={<ContextApiRoutes />} />
        <Route path="pvd" element={<ProviderRoutes />} />
        <Route path="ctp/*" element={<ContextApiProviderRoutes />} />
        <Route path="/rdx/*" element={<ReduxRoutes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
