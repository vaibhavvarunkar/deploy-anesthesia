import React, { useState, useEffect } from 'react'
import Header from '../CustomComponent/Header'
import { Link } from 'react-router-dom'
import { API_ROOT } from '../constants'
import '../css/preoperativeevalution.css'
const PreoperativeEvaluation = (props) => {
    const [medicalHistoryArray, setmedicalHistoryArray] = useState([])
    const [medicalHistory, setmedicalHistory] = useState([])
    const [medicationsArray, setmedicationsArray] = useState([])
    const [medication, setmedication] = useState([])
    const [diagnosisArray, setDiagnosis] = useState([])



    useEffect(() => {
        getCaseSummary()
    }, [])


    const getCaseSummary = async () => {
        var token = localStorage.getItem("token")

        fetch(API_ROOT + `case-summary-form-data?device_type=Android&device_token=123`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }

        })
            .then(response => response.json())
            .then(res => {
                if (res.status === "true" && res.message === "Case Summary Form Data") {

                    res.data.drugList.forEach(element => {
                        element.value = element.id;
                        element.label = element.drug_name
                    });

                    setmedicationsArray(res.data.drugList)


                    setmedicalHistory(res.data.medicalHistories)
                }
            })


    }
    var obj = {
        name: ""
    }
    const onSiteChanged = (e, name) => {
        console.log(name);
        if (e.target.value === "Yes") {
            medicalHistoryArray.push(e.target.name)
        }
        obj = {
            name: name
        }
        diagnosisArray.push(obj)
        console.log(diagnosisArray);
    }

    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }

    const onMedicationValue = (e, obj) => {
        if (e.target.value === "Yes") {
            medication.push(obj)
        }

    }

    const handleClick = async () => {
        try {

            var token = localStorage.getItem("token")
            console.log(diagnosisArray)
            fetch(`http://admin.anesthesiaone.com/api/preop-testing?token=${token}`, {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    diagnosis: diagnosisArray

                })

            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true" && res.message === "Preoperative Testing results") {
                        console.log(res.data);
                    } else {
                        alert(res.message)
                    }
                })


        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div>
            <Header onMenuClick={() => burgerMenuClick()} />
            <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>PREOPERATIVE EVALUATION</h4>
                <h4 className="hidn">CRISES</h4>
            </header>

            <div className="preoperative-question-container" >



                <div className="preoperative-medical-history-question-container" >

                    <div className="preoperative-medical-history-main-container row" >
                        <div className="col-md-2"></div>
                        <div className="col-md-8">

                            {
                                medicalHistory.map((data) => {
                                    return (
                                        <>
                                            <div style={{ width: "100%" }} >
                                                <div className="preoperative-medical-history-question-header" >
                                                    <div style={{ fontWeight: "bold" }}>{data.id}.{data.name}</div>

                                                </div>

                                                <div className="preoperative-medical-history-sub-question-sub-container" >
                                                    {
                                                        data.medical_history_sub_type.map((data) => {
                                                            return (
                                                                <div className="preoperative-sub-question-container" >
                                                                    <div>{data.name}</div>
                                                                    <div className="preoperative-option-box-container" >
                                                                        <input onChange={(e) => onSiteChanged(e, data.name)} type="radio" value="Yes" name={data.name} /> Yes
                                                                        <input onChange={(e) => onSiteChanged(e)} type="radio" value="No" name={data.name} /> No
                                                                    </div>
                                                                </div>

                                                            )
                                                        })
                                                    }



                                                </div>

                                            </div>
                                            <div className="all-action-subcontainer-content-1"></div>
                                        </>

                                    )
                                })
                            }
                            <div className="preoperative-medical-history-question-header" style={{ fontWeight: 'bold' }}>3.Medication</div>

                            {
                                medicationsArray.map((data) => {
                                    return (
                                        <>
                                            <div className="preoperative-medication-sub-question-container" style={{ position: "relative", right: 45 }} >
                                                <div>{data.label}</div>
                                                <div className="preoperative-option-box-container" >
                                                    <input onChange={(e) => onMedicationValue(e, data)} type="radio" value="Yes" name={data.drug_name} /> Yes
                                                    <input onChange={(e) => onMedicationValue(e, data)} type="radio" value="No" name={data.drug_name} /> No
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }



                        </div>

                        <div className="col-md-2"></div>
                    </div>
                </div>

            </div>
            <div className="all-action-subcontainer-content-1"></div>
            <div className="button-div-preop">
                <button onClick={() => handleClick()}>Submit</button>
            </div>
        </div>
    )
}

export default PreoperativeEvaluation