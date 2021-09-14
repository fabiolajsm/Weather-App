import React from 'react';
import './Nav.css';
import SearchBar from '../SearchBar/SearchBar';

function Nav({ onSearch }) {
  return (
    <nav className="ctn">
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;