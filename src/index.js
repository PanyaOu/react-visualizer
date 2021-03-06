import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import SortingVisualizer from "./routes/sortingVisualizer";
import PathFindingVisualizer from "./routes/pathFindingVisualizer";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="sorting" element={<SortingVisualizer />} />
      <Route path="pathfinding" element={<PathFindingVisualizer />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
