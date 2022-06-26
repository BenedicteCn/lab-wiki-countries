// src/App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import countriesData from './countries.json';
import AxiosApi from './components/AxiosAPI';
import OneCountryAPI from './components/OneCountryAPI';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <CountriesList />
      </div>
      <Routes>
        <Route
          path="/:id"
          element={<CountryDetails someData={countriesData} />}
        />
        <Route path="/API" element={<AxiosApi />} />
        <Route path="/API/USA" element={<OneCountryAPI />} />
      </Routes>
    </div>
  );
}

export default App;
