import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "../Components/Dogs";
import Cats from "../Components/Cats";
import Home from "../Components/Home";
import Header from "./Header";

export default function Router() {
  return (
    <BrowserRouter>
      <Header rota="Home" rota2="Adote um doguinho" rota3="Adote um gatinho" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dog" element={<Dogs />} />
        <Route path="/cat" element={<Cats />} />
      </Routes>
    </BrowserRouter>
  );
}
