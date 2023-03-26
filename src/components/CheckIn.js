import React from 'react'
import {useState} from 'react'
import Calendar from 'react-calendar'


function CheckIn() {

    const [date,setDate] = useState(new Date())

  return (
    <div className='app'>
        <h1 className='header'>Check In</h1>
        <div className='calendar-container'>
            <Calendar onChange={setDate} value={date} name="check_in"/>
        </div>
        <div className="text-center">
            Your check-in will be on: {date.toDateString()}
        </div>
    </div>
  )
}

export default CheckIn