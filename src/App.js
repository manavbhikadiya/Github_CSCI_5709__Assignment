import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ServiceCardListing from "./components/CardsListing/ServiceCardListing";
import ServiceDetailsPage from "./components/ServiceDetailsPage/ServiceDetailsPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ServiceCardListing />} />
        <Route path="/details" element={<ServiceDetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
