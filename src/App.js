
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/home.tsx";
import Header from "./components/header.tsx";
import Page1 from "./containers/page1.tsx"
export default function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/page1" element={<Page1 />} />
        </Routes>
      </BrowserRouter>
  );
}