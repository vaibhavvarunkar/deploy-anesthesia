import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import "../css/newLamaxHeader.css"

const LamaxSubHeader = () => {
    return (
        <div>
            <nav className="newLamaxHeader"><Link className="arrow" to="/anesthesiatype"><h3><i className="fas fa-arrow-left"></i></h3></Link><span>Return to start a case/Intraop</span></nav>
        </div>
    )
}

export default LamaxSubHeader
