import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useParams, Link } from 'react-router-dom'
import countriesData from '../countries.json'

export const CountryDetails = (props) => {

  const { id } = useParams();

  const countryAlphaCode = countriesData.find((country) => {
      return country.alpha3Code === id
    })

  return (
    <div>
      <Link to="/">Back</Link>
       <div className="col-7">
       <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${countryAlphaCode.alpha2Code.toLowerCase()}.png`} width="25px"
              alt = "lol"/>
            <h1>{countryAlphaCode.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td >Capital</td>
                  <td>{countryAlphaCode.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {countryAlphaCode.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li> {countryAlphaCode.borders[0]} </li>
                      <li> {countryAlphaCode.borders[1]} </li>
                      <li> {countryAlphaCode.borders[2]} </li>
                      <li> {countryAlphaCode.borders[3]} </li>
                      <li> {countryAlphaCode.borders[4]} </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  )
}

export default CountryDetails

// <ul> {countryAlphaCode.borders.map((country) => (
//   <li key={country._id}> {country.name.common} </li>))}

// </ul>
