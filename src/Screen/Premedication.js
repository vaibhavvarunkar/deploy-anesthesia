import React, { useEffect, useState } from 'react'
import Header from '../CustomComponent/Header'
import '../css/RiskEvalution.css'
import OtherBtn from './OtherBtn'
import { Link } from 'react-router-dom'
const Premedication = (props) => {
    const [premedicationArray, setpremedicationArray] = useState([
        {
            id: 1,
            name: 'ANALGESIA'
        },
        {
            id: 2,
            name: 'ANTIEMETIC'
        },
        {
            id: 3,
            name: 'ANXIOLYSIS'
        },
    ])
    const [value, setValue] = useState(null)
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }

    useEffect(() => {
        if (props.location.state !== undefined) {
            addnewData()
        }

    }, [premedicationArray])


    const refresh = () => {
        // it re-renders the component
        setValue({});
    }

    const addnewData = () => {
        console.log(props.location.state.actionSummaryType, props.location.state.categorySelected)
        if (props.location.state.actionSummaryType === "premedication") {
            if (props.location.state.categorySelected === "Crises") {
                props.location.state.actionSummary.map((data) => {
                    let obj = {
                        id: '',
                        name: ''
                    }
                    obj.id = premedicationArray.length + 1
                    obj.name = data.name
                    premedicationArray.push(obj)
                })
                refresh()
            }
        }
    }

    const navigateToRiskEvalutionType = (value) => {
        if (value === "RCRI") {
            props.history.push('/rcri')
        }
    }


    return (
        <div>

            <Header onMenuClick={() => burgerMenuClick()} />
            <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>PREMEDICATION</h4>
                <h4 className="hidn">CRISES</h4>
            </header>
            <div className="risk-evalution-main-container" >
                <div className="risk-evalution-list-container" >
                    <div className="row">
                        <div className="col-md-3"> </div>
                        <div className="col-md-6">
                            {
                                premedicationArray.map((data) => {
                                    return (
                                        <div className="risk-ev" style={{ cursor: 'pointer' }} onClick={() => navigateToRiskEvalutionType(data.name)} >
                                            <h4>{data.name}</h4>
                                        </div>
                                    )
                                })
                            }
                            <div className="risk-ev">
                                <h4><OtherBtn /></h4>
                            </div>

                        </div>
                        <div className="col-md-3"> </div>
                    </div>
                </div>

                <div className="risk-evalution-add-more-btn" onClick={() => props.history.push('/allactionforactionsummary?addinto=premedication')} >
                    <div className="btn-div">
                        <a style={{ backgroundColor: "orange" }}>Add</a>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Premedication