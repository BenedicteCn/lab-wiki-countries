// src/App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import Layout from './components/Layout';
import countriesData from './countries.json';
import AxiosApi from './components/AxiosAPI';
import OneCountryAPI from './components/OneCountryAPI';
import { useParams } from 'react'; // <== IMPORT useEffect

function App() {
  function Child() {
    let { id } = useParams();

    return (
      <div>
        <CountryDetails someData={countriesData} />
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
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
