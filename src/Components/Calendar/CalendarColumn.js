import React from 'react'
import '../../styles/calendar.css'
import CalendarRow from './CalendarRow'

const CalendarColumn = () => {
    return(
        <div className="calendarColumn">
            <h1>CalendarColumn</h1>
            <CalendarRow/>
        </div>
    )
}

export default CalendarColumn