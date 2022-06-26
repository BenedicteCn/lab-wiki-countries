
import { useState, useEffect } from "react";     // <== IMPORT useEffect
import axios from "axios";                       // <== IMPORT axios
import { Link } from 'react-router-dom';


function AxiosAPI () {

 const [countries, setcountries] = useState([]);

  useEffect(() => {                                // <== ADD THE EFFECT
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log('response.data', response.data);
        setcountries(response.data)
      });

  }, [] );  // <- [] means: Run the effect only once, after initial render


  return (
    <div className="countries">
    <div className ="container">
      <div className="row">
        <div className="col-5">
          <div className="list-group">
      <h3>List of countries with API</h3>
        {countries.map((country) => (
      <Link to={`/${country.alpha3Code}`} key={country._id}>
          <img
      src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} width="20px"
      alt = "lol"/>
        <p><strong>Name:{country.name.common}</strong> </p>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area} km</p>
      </ Link>
      ))}
      </div>
            </div>
          </div>
        </div>

    </div>
  );
}

export default AxiosAPI;
