import React from 'react'
import '../../styles/calendar.css'
import CalendarColumn from './CalendarColumn'

const CalendarTable = () => {
    return(
        <div className="calendarTable">
            <h1>CalendarTable</h1>
            <CalendarColumn/>
        </div>
    )
}

export default CalendarTable