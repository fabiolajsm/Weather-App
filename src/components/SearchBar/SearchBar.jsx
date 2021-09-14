import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (city === "") return null;
      onSearch(city);
      setCity("");
    }}>
      <input
        className="inp"
        type="text"
        placeholder="Busca un lugar..."
        autoComplete="off"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="bt" type="submit" value='🔍' />
    </form>
  );
}
