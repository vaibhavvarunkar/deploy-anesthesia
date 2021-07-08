import React from 'react'
import Header from '../CustomComponent/Header'
import { Link } from 'react-router-dom'

const SpecialMonitoring = (props) => {
    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }

    const specializedMonitoring = [
        { value: 'CSF Drain', label: 'CSF Drain' },
        { value: 'TEE', label: 'TEE' },
        { value: 'Neuromonitoring', label: 'Neuromonitoring' }

    ]
    return (
        <div>
            <Header onMenuClick={() => burgerMenuClick()} />
            <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>SPECIAL MONITORING</h4>
                <h4 className="hidn">CRISES</h4>
            </header>
            <div className="monitoring-div">
                <div className="sub-mon-div">
                    {
                        specializedMonitoring.map((data) => {
                            return (
                                <div >
                                    <h5 style={{ cursor: "pointer" }}>{data.label}</h5>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="btn-btn">
                <a className="risk-btn">Submit</a>
            </div>
        </div>
    )
}

export default SpecialMonitoring
