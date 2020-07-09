import React from 'react'
import '../../styles/date.css'
import moment from 'moment'
import DateRow from './DateRow'

const DateTable = (props) => {

    const {officeHours} = props

    // recursive function
    // base case: You have reached close time. so, currentTime === closeTime?
    /**What doing?: Starting from startTime, return a div-row with the current time [or ann array of times].
     * Then increment the time by 30 mins
    */
    // Call func w/: newStartTime, CloseTime, array
    
    const makeTimeSlotArr = (startTime, endTime, timeSlotArr=[]) => {

        if (moment(startTime).get('hour') >= moment(endTime).get('hour')) {
			timeSlotArr.push(startTime._d)
            return timeSlotArr
        }
        timeSlotArr.push(startTime._d)
        moment(startTime.add(30, 'm'))
        

		return makeTimeSlotArr(startTime, endTime, timeSlotArr)
    }

    console.log(makeTimeSlotArr(officeHours.open, officeHours.close))


    return(
        <div className="dateTable w-100 d-flex flex-column justify-content-between align-items-center">
            <div className='row w-100 d-flex justify-content-center align-items-center'>
                <div className='col-12 my-1 d-flex justify-content-center align-items-center'>
                    <DateRow/>
                </div>
            </div>
            <div className='row w-100 d-flex justify-content-center align-items-center'>
                <div className='col-12 my-1 d-flex justify-content-center align-items-center'>
                    <DateRow/>
                </div>
            </div>
            <div className='row w-100 d-flex justify-content-center align-items-center'>
                <div className='col-12 my-1 d-flex justify-content-center align-items-center'>
                    <DateRow/>
                </div>
            </div>
            <div className='row w-100 d-flex justify-content-center align-items-center'>
                <div className='col-12 my-1 d-flex justify-content-center align-items-center'>
                    <DateRow/>
                </div>
            </div>
            <div className='row w-100 d-flex justify-content-center align-items-center'>
                <div className='col-12 my-1 d-flex justify-content-center align-items-center'>
                    <DateRow/>
                </div>
            </div>
            <div className='row w-100 d-flex justify-content-center align-items-center'>
                <div className='col-12 my-1 d-flex justify-content-center align-items-center'>
                    <DateRow/>
                </div>
            </div>
            <div className='row w-100 d-flex justify-content-center align-items-center'>
                <div className='col-12 my-1 d-flex justify-content-center align-items-center'>
                    <DateRow/>
                </div>
            </div>
            <div className='row w-100 d-flex justify-content-center align-items-center'>
                <div className='col-12 my-1 d-flex justify-content-center align-items-center'>
                    <DateRow/>
                </div>
            </div>
            <div className='row w-100 d-flex justify-content-center align-items-center'>
                <div className='col-12 my-1 d-flex justify-content-center align-items-center'>
                    <DateRow/>
                </div>
            </div>
        </div>
    )
}

export default DateTable