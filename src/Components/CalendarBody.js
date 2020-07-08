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
        <div className='calendarBody'>
            <div className='titleGroup p-3 d-flex justify-content-between'>
                <div className='d-flex flex-column'>
                    <img className=''
                        src={logo}
                        alt='CallForce Logo'
                        width='150'/>
                    <button className='my-2 btn btn-info'
                        onClick={showModal}
                    ><i class="fas fa-plus"></i> Add Availability</button>
                </div>
                <TitleTable/>
            </div>
            <div className='dateGroup showMe p-3 d-flex justify-content-between'>
                <DateTable/>
                <CalendarTable/>
            </div>
        </div>
    )
}

export default CalendarBody