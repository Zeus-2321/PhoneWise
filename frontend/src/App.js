import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Brands from "./Components/Brands";
import About from "./Components/About";
import SearchResult from "./Components/SearchResult";
import Details from "./Components/Details";
import BrandListing from "./Components/BrandListing";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";


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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
