import React from 'react'
import '../../styles/calendar.css'
import moment from 'moment'
import TitleColumn from '../Title/TitleColumn'

const CalendarRow = (props) => {

    const {title, timeSlot} = props

    return(
        <div className="calendarRow showMe mb-1">
            <h1>{moment(timeSlot).format('LT')}</h1>
        </div>
    )
}

export default CalendarRow