import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-container">
        <FaSearch className="search-icon" style={{color:"#b91a20"}}/>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchBar;
