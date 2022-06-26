import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
       <div className="container">
          <a className="navbar-brand" href="/">Lab - WikiCountries</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
