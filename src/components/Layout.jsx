import React from 'react'
import CountriesList from './CountriesList'
import Navbar from './Navbar'

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <CountriesList/>
    </div>
  )
}

export default Layout
