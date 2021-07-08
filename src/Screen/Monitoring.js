import React, { useState } from 'react'
import Header from '../CustomComponent/Header'
import { Link } from 'react-router-dom'
import "../css/Monitoring.css"
// import { handleInputChange } from 'react-select/src/utils'

const Monitoring = (props) => {
    const [monitoring, setmonitoring] = useState([
        { label: 'All Standard ASA Monitors', value: 'All Standard ASA Monitors', subcategory: [] },
        { label: 'Not Standard ASA Monitors', value: 'Not Standard ASA Monitors', subcategory: [{ label: 'Pulse oximeter', value: 'Pulse oximeter' }, { label: 'Electrocardiography', value: 'Electrocardiography' }, { label: 'Noninvasive blood pressure', value: 'Noninvasive blood pressure' }, { label: 'Temperature monitor', value: 'Temperature monitor' }, { label: 'Inspired and expired gas monitoring', value: 'Inspired and expired gas monitoring' }, { label: 'Peripheral nerve stimulator for NMB monitoring', value: 'Peripheral nerve stimulator for NMB monitoring' }, { label: 'Airway pressure', value: 'Airway pressure' }] }
    ])
    const [isData, setisData] = useState([])
    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }

    const handleChange = (value) => {
        console.log(value);
        setisData(value)
    }
    return (
        <div>
            <Header onMenuClick={() => burgerMenuClick()} />
            <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>MONITORING</h4>
                <h4 className="hidn">CRISES</h4>
            </header>
            <div className="monitoring-div">
                <div className="sub-mon-div">
                    {
                        monitoring.map((data) => {
                            return (
                                <div >
                                    <h5 onClick={() => handleChange(data.subcategory, data.label)} style={{ cursor: "pointer" }}>{data.label}</h5>
                                    {
                                        isData.length ?
                                            <>
                                                {
                                                    data.label === "Not Standard ASA Monitors" && isData.map((data1) => {
                                                        return (
                                                            <>
                                                                <h6>{data1.label}</h6>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </>
                                            :
                                            <></>
                                    }
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

export default Monitoring
