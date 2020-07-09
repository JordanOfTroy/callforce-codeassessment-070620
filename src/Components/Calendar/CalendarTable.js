import React from 'react'
import '../../styles/calendar.css'
import CalendarColumn from './CalendarColumn'

const CalendarTable = (props) => {

    const {officeHours, titles} = props
 

    return(
        <div className="calendarTable showMe p-1 d-flex justify-content-between align-items-center">
            {
                titles.map((title, index) => {
                    console.log(title, officeHours.open._d)
                    return (
                        <CalendarColumn
                            key={index}
                            title={title}
                            officeHours = {officeHours}
                        />
                    )
                })
            }
            {/* <CalendarColumn
                officeHours = {officeHours}
                title = {titles[0]}
            />
            <CalendarColumn
                officeHours = {officeHours}
                title = {titles[1]}
            />
            <CalendarColumn
                officeHours = {officeHours}
                title = {titles[2]}
            /> */}
           
        </div>
    )
}

export default CalendarTable 