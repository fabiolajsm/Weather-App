import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Nav.css';


function Nav({ onSearch }) {
  return (
    <nav className="ctn">
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;