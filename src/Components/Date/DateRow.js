import React from 'react'
import '../../styles/date.css'
import moment from 'moment'

const DateRow = (props) => {

    const {timeSlot} = props
    console.log(timeSlot, 'timeSlot')
    return(
        <div className="dateRow row w-100 d-flex justify-content-center align-items-center">
            <h1>{moment(timeSlot).format('LT')}</h1>
        </div>
    )
}

export default DateRow