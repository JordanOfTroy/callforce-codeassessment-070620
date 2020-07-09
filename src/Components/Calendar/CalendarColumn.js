import React from 'react'
import '../../styles/calendar.css'
import moment from 'moment'
import CalendarRow from './CalendarRow'

const CalendarColumn = (props) => {

    const {title, officeHours} = props

    const makeTimeSlotArr = (startTime, endTime, timeSlotArr=[]) => {

        if (moment(startTime).get('hour') === moment(endTime).get('hour')) {
            timeSlotArr.unshift(moment().set({'hour': 8, 'minute': 0})._d) /**Hack BS, but the show must go on */
            return timeSlotArr
        }

        timeSlotArr.push(startTime._d)
        startTime = moment(startTime.add(30, 'm'))

		return makeTimeSlotArr(startTime, endTime, timeSlotArr)
    }

    // const makeTimeSlotArr = (startTime, endTime) => {

    //     const open = startTime.get('LT')
    //     const close = endTime.get('LT')
    //     console.log(open, close)
    //     open = startTime.add(30, 'm')
    //     console.log(open)
    //     console.log()
    //     const timeSlotArr = []

    //     for (let i = startTime.get('h'); i < endTime.get('h'); i++) {
    //         console.log('HELLO WORLD', test, i)
    //     }
    // }

    const timeSlotArr = makeTimeSlotArr(officeHours.open, officeHours.close)

    return(
        <div className="calendarColumn p-1 mx-5">
            {
                timeSlotArr.map((timeSlot, index) => {
                    return (
                        <CalendarRow
                            key = {index}
                            timeSlot = {timeSlot}
                            title = {title}
                        />
                    )
                })
            }
           
        </div>
    )
}

export default CalendarColumn