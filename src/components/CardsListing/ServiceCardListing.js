import React from "react";
import LocalServiceCard from "../LocalServiceCard/LocalServiceCard";
import SearchBar from "../SearchBar/SearchBar";

const ServiceCardListing = () => {
  return (
    <div class="container">
      <SearchBar />
      <div class="row">
        <LocalServiceCard />
        <LocalServiceCard />
        <LocalServiceCard />
        <LocalServiceCard />
        <LocalServiceCard />
        <LocalServiceCard />
      </div>
    </div>
  );
};

export default ServiceCardListing;
