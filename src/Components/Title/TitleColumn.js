import React from 'react'
import '../../styles/titles.css'

const TitleColumn = (props) => {

    const {title} = props

    return(
        <div className="titleColumn row d-flex justify-content-center align-items-center h-100">
            <h1>{title}</h1>
        </div>
    )
}

export default TitleColumn