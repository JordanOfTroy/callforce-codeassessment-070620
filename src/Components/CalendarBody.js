import React from 'react'
import '../styles/calendar.css'
import TitleTable from './Title/TitleTable'
import DateTable from './Date/DateTable'
import CalendarTable from './Calendar/CalendarTable'
import logo from '../media/logo-large.png'

const CalendarBody = () => {

    const showModal = () => {
        document.getElementById('modalOverlay').style.display = 'inline-flex'
    }

    return (
        <div className='calendarBody p-3 showMe'>
            <div className='titleGroup showMe'>
                <img src={logo} alt='CallForce Logo' width='150'/>
                <br/>
                <button
                    onClick={showModal}
                ><i class="fas fa-plus"></i> Add Availability</button>
                <TitleTable/>
            </div>
            <div className='dateGroup showMe'>
                <DateTable/>
                <CalendarTable/>
            </div>
        </div>
    )
}

export default CalendarBody