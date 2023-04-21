import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../home/Home";
import Menu from "../menu/Menu";
import Bar from "../bar/Bar";
import Discounts from "../discounts/Discounts";

const RouterUI = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Bar" element={<Bar />} />
        <Route path="/Discounts" element={<Discounts />} />
        <Route path="*" element={<h1>ERROR</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterUI;
