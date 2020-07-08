import React, {useState} from 'react'
import '../styles/calendar.css'
import TitleTable from './Title/TitleTable'
import DateTable from './Date/DateTable'
import CalendarTable from './Calendar/CalendarTable'
import logo from '../media/logo-large.png'

const CalendarBody = () => {

    const [stateObj, setStateObj] = useState({
        titles: ['Doctor', 'Assistant', 'Hygienist']
    })

    const showModal = () => {
        document.getElementById('modalOverlay').style.display = 'inline-flex'
    }

    return (
        <div className='calendarBody'>
            <div className='titleGroup row p-2 d-flex justify-content-between'>
                <div className='d-flex flex-column col-2'>
                    <img className='img-fluid'
                        src={logo}
                        alt='CallForce Logo'
                        />
                    <button className='my-2 btn btn-info'
                        onClick={showModal}
                    ><i class="fas fa-plus"></i> Add Availability</button>
                </div>
                <div className='col-10'>
                    <TitleTable
                        titles = {stateObj.titles}
                    />
                </div>
            </div>
            <div className='dateGroup showMe p-3 d-flex justify-content-between'>
                <DateTable/>
                <CalendarTable/>
            </div>
        </div>
    )
}

export default CalendarBody