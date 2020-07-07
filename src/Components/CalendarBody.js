import React from 'react'
import '../styles/calendar.css'
import TitleTable from './Title/TitleTable'
import DateTable from './Date/DateTable'
import CalendarTable from './Calendar/CalendarTable'
import logo from '../media/logo-large.png'

const CalendarBody = () => {
    return (
        <div className='calendarBody'>
            <div className='titleGroup'>
                <img src={logo} alt='CallForce Logo' width='150'/>
                <br/>
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