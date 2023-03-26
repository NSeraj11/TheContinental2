import React from 'react'
import {useState} from 'react'
import Calendar from 'react-calendar'


function CheckOut() {

    const [date, setDate] = useState(new Date())

  return (
    <div className='app'>
        <h1 className='header'>Check Out</h1>
        <div className='calendar-container'>
            <Calendar onChange={setDate} value={date} name="check_out"/>
        </div>
        <div className="text-center">
            Your check-out will be on: {date.toDateString()}
        </div>
    </div>
  )
}


export default CheckOut