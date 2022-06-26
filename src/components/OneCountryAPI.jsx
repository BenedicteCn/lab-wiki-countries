import React from 'react'
import { useState, useEffect } from "react";     // <== IMPORT useEffect
import axios from "axios";                       // <== IMPORT axios


const OneCountryAPI = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {                                // <== ADD THE EFFECT
    axios
      .get("https://ih-countries-api.herokuapp.com/countries/USA")
      .then((response) => {
        console.log('response.data', response.data);
        setCountry(response.data)
      });

  }, [] );
  return (
    <div>
    <p>Capital: {country.capital}</p>
    <p>Area: {country.area} km</p></div>
  )
}

export default OneCountryAPI
