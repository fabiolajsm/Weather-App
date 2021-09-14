import React, { useState } from 'react';
import './App.css'
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import City from "./components/City/City";
import { Route } from "react-router-dom";
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);

  function onClose(id) { setCities(oldCities => oldCities.filter(c => c.id !== id)); }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round((recurso.main.temp_min / 10)),
            max: Math.round((recurso.main.temp_max / 10)),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };

          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Lugar no encontrado");
        }
      });
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    return ciudad.length > 0 ? ciudad[0] : null
  }

  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      <Route exact path="/" render={() => <Cards cities={cities} onClose={onClose} />} />
      <Route path="/city/:cityId" render={({ match }) => <City city={onFilter(match.params.cityId)} />} />
    </div>
  );
}
export default App;