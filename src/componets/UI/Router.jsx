import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../home/Home";
import Menu from "../menu/Menu";

const RouterUI = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="*" element={<h1>ERROR</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterUI;
