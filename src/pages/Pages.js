import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Area from './Area'
import Menu from './Menu'
import Rooms from './Rooms'
import Booking from './Booking'

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/area" element={<Area />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  )
}

export default Pages