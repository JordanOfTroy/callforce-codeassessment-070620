import React from 'react'
import '../../styles/titles.css'
import TitleColumn from './TitleColumn'

const TitleTable = (props) => {
    const {titles} = props

    return(
        <div className="titleTable row h-100 d-flex justify-content-between align-items-stretch">
            {
                titles.map((title, index) => {
                    return (
                        <div className='col-sm m-2' key={index}>
                            <TitleColumn
                                title = {title}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TitleTable