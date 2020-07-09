import React from 'react'
import '../../styles/date.css'
import moment from 'moment'
import DateRow from './DateRow'

const DateTable = (props) => {

    const {officeHours} = props

    const makeTimeSlotArr = (startTime, endTime, timeSlotArr=[]) => {

        if (moment(startTime).get('hour') === moment(endTime).get('hour')) {
            timeSlotArr.unshift(moment().set({'hour': 8, 'minute': 0})._d) /**Hack BS, but the show must go on */
            return timeSlotArr
        }

        timeSlotArr.push(startTime._d)
        startTime = moment(startTime.add(30, 'm'))

		return makeTimeSlotArr(startTime, endTime, timeSlotArr)
    }
  
    const timeSlotArr = makeTimeSlotArr(officeHours.open, officeHours.close)

    return(
        <div className="dateTable w-100 d-flex flex-column justify-content-between align-items-center">
            {   
                timeSlotArr.map((timeSlot, index) => {
                    return (
                        <div key={index} className='row w-100 d-flex justify-content-center align-items-center'>
                            <div className='col-12 my-1 d-flex justify-content-center align-items-center'>
                                <DateRow
                                    timeSlot = {timeSlot}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DateTable