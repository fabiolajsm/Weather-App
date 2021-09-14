import React from 'react';
import { Link } from 'react-router-dom';
import './City.css';

export default function City({ city }) {
    if (!city) return <div>Ups, no tenemos información del lugar!</div>
    return (
        <div className="container">
            <Link to="/" id="close">🡠</Link>
            <h2>{city.name}</h2>
            <div>Temperatura: {city.temp} ºC</div>
            <div>Clima: {city.weather}</div>
            <div>Viento: {city.wind} km/h</div>
            <div>Cantidad de nubes: {city.clouds}</div>
            <div>Latitud: {city.latitud}º</div>
            <div>Longitud: {city.longitud}º</div>
        </div>
    )
}
