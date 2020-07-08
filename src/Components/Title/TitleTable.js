import React from 'react'
import '../../styles/titles.css'
import TitleColumn from './TitleColumn'

const TitleTable = () => {
    return(
        <div className="titleTable showMe d-flex justify-content-between align-items-center w-75">
            <TitleColumn/>
            <TitleColumn/>
            <TitleColumn/>
        </div>
    )
}

export default TitleTable