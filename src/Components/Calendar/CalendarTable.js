import React from 'react'
import '../../styles/calendar.css'
import CalendarColumn from './CalendarColumn'

const CalendarTable = () => {
    return(
        <div className="calendarTable showMe p-1 d-flex justify-content-between align-items-center">
            <CalendarColumn/>
            <CalendarColumn/>
            <CalendarColumn/>
        </div>
    )
}

export default CalendarTable