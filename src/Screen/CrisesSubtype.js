import React, { useState } from 'react'
import "../css/CrisesSub.css"
import Header from '../CustomComponent/Header'

const CrisesSubtype = (props) => {
    const [display, setDisplay] = useState(false);
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }
    return (
        <div>
            <Header onMenuClick={() => burgerMenuClick()} />
            <header>
                <h2>{props.location.state.name}</h2>
                {
                    display ?
                        <input placeholder="Enter Patient's Weight"></input>
                        : <h2 onClick={() => setDisplay(true)}>Patients Weight</h2>
                }

            </header>
            <div className="content">
                <h2>May Have:</h2>
                <ul>
                    <li>Hypotension</li>
                    <li>Rash</li>
                    <li>Bronchospasm</li>
                </ul>
                <br></br>
                <br></br>
                <h2>Common Causative Agents:</h2>
                <ul>
                    <li>Hypotension</li>
                    <li>Rash</li>
                    <li>Bronchospasm</li>
                    <li>Antibodies</li>
                    <li>Latex</li>
                </ul>
            </div>
        </div>
    )

}

export default CrisesSubtype
