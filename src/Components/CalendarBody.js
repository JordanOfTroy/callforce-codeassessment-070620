import React from 'react'
import '../styles/calendar.css'
import TitleTable from './Title/TitleTable'
import DateTable from './Date/DateTable'
import CalendarTable from './Calendar/CalendarTable'

const CalendarBody = () => {
    return (
        <div className='calendarBody'>
            <div className='titleGroup'>
                <button><i class="fas fa-plus"></i> Add Availability</button>
                <TitleTable/>
            </div>
            <div className='dateGroup'>
                <DateTable/>
                <CalendarTable/>
            </div>
        </div>
    )
}

export default CalendarBody