import React, { useEffect, useState } from 'react'
import Header from '../CustomComponent/Header'
import '../css/RiskEvalution.css'
import OtherBtn from './OtherBtn'
import { API_ROOT } from '../constants'
import Axios from "axios"
import { Link } from 'react-router-dom'
const Induction = (props) => {
    const [inductionArray, setinductionArray] = useState([
        {
            id: 1,
            name: 'ANESTHESIA'
        },
        {
            id: 2,
            name: 'ANALGESIA'
        },
        {
            id: 3,
            name: 'BLOOD PRESSURE'
        },
        {
            id: 4,
            name: 'PARALYTICS'
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

    }, [inductionArray])


    const refresh = () => {
        // it re-renders the component
        setValue({});
    }

    const addnewData = () => {
        console.log(props.location.state.actionSummaryType, props.location.state.categorySelected)
        if (props.location.state.actionSummaryType === "induction") {
            if (props.location.state.categorySelected === "Crises") {
                props.location.state.actionSummary.map((data) => {
                    let obj = {
                        id: '',
                        name: ''
                    }
                    obj.id = inductionArray.length + 1
                    obj.name = data.name
                    inductionArray.push(obj)
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


    const saveInductionData = async () => {
        try {
            const token = await localStorage.getItem('token')
            const url = API_ROOT + `save-inductions?token=${token}`
            const body = {
                "case_id": "270",
                "drug_name": "test drug11",
                "drug_id": "11",
                "age": "11",
                "weight": "222",
                "height": "222",
                "patient_type": "testing ",
                "suggested_bolus_dose": "test output",
                "suggested_infusion_dose": "test output",
                "suggested_administration_route": "test output",
                "suggested_administration_notes": "test output",
                "personal_bolus_dose": "test output",
                "personal_infusion_dose": "test output",
                "personal_administration_route": "test output",
                "personal_administration_notes": "test output"

            }


            const res = await Axios.post(url, body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            console.log(res.data)

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>

            <Header onMenuClick={() => burgerMenuClick()} />
            <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>INDUCTION</h4>
                <h4 className="hidn">CRISES</h4>
            </header>
            <div className="risk-evalution-main-container" >
                <div className="risk-evalution-list-container" >
                    {
                        inductionArray.map((data) => {
                            return (
                                <div className="risk-ev" style={{ cursor: 'pointer' }} onClick={() => navigateToRiskEvalutionType(data.name)} >
                                    <h4>{data.name}</h4>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="risk-ev">
                    <h4> <OtherBtn /></h4>
                </div>

                {/* <div className="risk-evalution-add-more-btn" onClick={() => props.history.push('/allactionforactionsummary?addinto=induction')} >
                    Add
                </div> */}
                <div className="btn-btn">
                    <a className="risk-btn" style={{ backgroundColor: "violet" }}>ADD</a>
                </div>


            </div>

            <div className="btn-btn">
                <a className="risk-btn" onClick={() => saveInductionData()}>Submit</a>
            </div>

        </div>
    )
}

export default Induction