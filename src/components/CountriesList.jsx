import countriesData from '../countries.json'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';



import React from 'react'

const CountriesList = () => {
  const countries = [...countriesData]
  return (
    <div className="countries">
      <div className ="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
            {countries.map((country) => (
                <Link to={`/${country.alpha3Code}`} key={country._id} >
                   <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} width="20px"
               alt = "lol"/>
                 {country.name.common}
                </Link>))}
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CountriesList
