import React from 'react'
import '../styles/calendar.css'
import TitleTable from './Title/TitleTable'
import DateTable from './Date/DateTable'
import CalendarTable from './Calendar/CalendarTable'
import logo from '../media/logo-large.png'

const CalendarBody = (props) => {

    const { officeHours } = props

    const showModal = () => {
        document.getElementById('modalOverlay').style.display = 'inline-flex'
    }

    return (
        <div className='calendarBody'>
            <div className='titleGroup row p-2 d-flex justify-content-between'>
                <div className='col-2 d-flex flex-column justify-content-center align-items-center'>
                    <img className='img-fluid'
                        src={logo}
                        alt='CallForce Logo'
                    />
                    <button className='my-2 btn btn-info'
                        onClick={showModal}
                    ><i className="fas fa-plus"></i> Add Availability</button>
                </div>
                <div className='col-10'>
                    <TitleTable
                        titles={props.titles}
                    />
                </div>
            </div>
            <div className='dateGroup row p-2 d-flex justify-content-between'>
                <div className='col-2 d-flex flex-column justify-content-start align-items-center'>
                    <DateTable
                        officeHours={officeHours}
                    />
                </div>
                <div className='col-10'>
                    <CalendarTable />
                </div>
            </div>
        </div>
    )
}

export default CalendarBody