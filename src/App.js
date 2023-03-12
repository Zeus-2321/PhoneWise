import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Brands from "./Components/Brands";
import About from "./Components/About";
import SearchResult from "./Components/SearchResult";
import Details from "./Components/Details";




function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/brands" element={<Brands></Brands>} />
        <Route path="/results" element={<SearchResult></SearchResult>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/details/:slug" element={<Details></Details>} />
      </Routes>
    </>
  );
}

export default App;
