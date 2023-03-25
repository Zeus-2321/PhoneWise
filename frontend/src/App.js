import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Brands from "./Components/Brands";
import About from "./Components/About";
import SearchResult from "./Components/SearchResult";
import Details from "./Components/Details";
import BrandListing from "./Components/BrandListing";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/results" element={<SearchResult />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:slug" element={<Details />} />
        <Route path="brandListing/:slug" element={<BrandListing />} />
      </Routes>
    </>
  );
}

export default App;
