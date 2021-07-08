import React, { useEffect, useState } from 'react'
import { API_ROOT } from '../constants'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import LamaxSubHeader from "./LamaxSubHeader"
import Select from 'react-select'
import "../css/newLamaxHeader.css"
import { useDispatch, useSelector } from 'react-redux'
import { setNewComorbities, setNewHeightType, setNewLamaxHeight, setNewLamaxWeight, setNewWeightType } from '../redux/NewLamaxActions'

const NewAfterLamax = (props) => {
    const [comorbitiesValue, setComorbitiesValue] = useState([])
    const dispatch = useDispatch()
    const newWeightType = useSelector(state => state.newLamax.newWeightType)
    const newHeightType = useSelector(state => state.newLamax.newHeightType)
    const weight2 = useSelector(state => state.newLamax.weight2)
    const height2 = useSelector(state => state.newLamax.height2)
    const [comorbities, setComorbities] = useState([])
    const [checked, setChecked] = useState(false);
    const [mass, setMass] = useState("Manual Entry")
    const [arr, setarr] = useState([])
    // const [button, setButton] = useState(false)
    useEffect(() => {
        getLAMAXData()

    }, [])
    const getLAMAXData = () => {
        var token = localStorage.getItem('token')
        fetch(API_ROOT + `la-max-drugs?token=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(res => {
                console.log(res.data)
                if (res.status === "true" && res.message === "LA Max Drugs") {
                    setComorbities(res.data.comorbidity)
                } else {
                    alert(res.message)
                }
            })

    }
    const weightOptions = [
        { value: 'Manual Entry', label: 'Manual Entry' },
        { value: 'Calculated Lean Body Mass', label: "Calculated Lean Body Mass" },
    ];
    const weightTypes = [
        { value: 'KG', label: 'KG' },
        { value: 'LB', label: "LB" },
    ];

    const heightTypes = [
        { value: 'CM', label: 'CM' },
        { value: 'IN', label: "IN" },
    ];
    const [burgerMenu, setburgerMenu] = useState(false)
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }
    const ddChange = (data) => {
        setMass(data.value)
    }

    var obj = {
        name: "",
        value: "",
        msg: ""
    }

    const onSelectComborbities = (comorbidityName, comorbidityValue, comorbidityMsg) => {
        obj = {
            name: comorbidityName,
            value: comorbidityValue,
            msg: comorbidityMsg
        }
        comorbitiesValue.push(obj)
        arr.push(comorbidityName)
    }

    console.log(mass)
    return (
        <div>
            <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header onMenuClick={() => burgerMenuClick()} />
            <LamaxSubHeader />
            <div className="newLamaxDiv">
                <h1>LOCAL ANESTHETIC MAX</h1>
            </div>
            <div className="newLamaxDiv2">
                <h4>Step 1 of 3: Enter Patient data</h4>
            </div>
            <div className="lamaxContent">
                <h3>STEP 1- a:</h3>
                <br></br>
                <h5>ENTER WEIGHT</h5>
                <br></br>
                <Select className="newLamaxDd" defaultValue={weightOptions.filter(opt => opt.label === "Manual Entry")} onChange={(value) => ddChange(value)} options={weightOptions} placeholder="Select Weight Type" />
                <br></br>
                {
                    mass === "Manual Entry" ?
                        <>
                            <div className="dd">
                                <span>WEIGHT</span><input onChange={(e) => dispatch(setNewLamaxWeight(e.target.value))} placeholder="Weight"></input>
                                {
                                    weightTypes.map((data, i) => {
                                        if (data.value === "KG" && newWeightType === "") {
                                            return (
                                                <div className="weight-type-button-selected-of-patient-profile" onClick={() => dispatch(setNewWeightType(data))}>{data.label}</div>
                                            )
                                        }
                                        else {
                                            if (data.value === newWeightType.value) {
                                                return (
                                                    <div className="weight-type-button-selected-of-patient-profile" onClick={() => dispatch(setNewWeightType(data))}>{data.label}</div>
                                                )
                                            }
                                            else {
                                                return (
                                                    <div className="weight-type-button-of-patient-profile" onClick={() => dispatch(setNewWeightType(data))}>{data.label}</div>
                                                )
                                            }
                                        }

                                    })
                                }
                            </div>
                            <div className="lamaxBtn">
                            </div>
                        </>
                        :
                        <>
                            <div className="dd">
                                <span>WEIGHT</span><input onChange={(e) => dispatch(setNewLamaxWeight(e.target.value))} placeholder="Weight"></input>
                                {
                                    weightTypes.map((data, i) => {
                                        if (data.value === newWeightType.value) {
                                            return (
                                                <div className="weight-type-button-selected-of-patient-profile" onClick={() => dispatch(setNewWeightType(data))}>{data.label}</div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div className="weight-type-button-of-patient-profile" onClick={() => dispatch(setNewWeightType(data))}>{data.label}</div>
                                            )
                                        }

                                    })
                                }
                                <span>HEIGHT</span><input onChange={(e) => dispatch(setNewLamaxHeight(e.target.value))} placeholder="Height"></input>
                                {
                                    heightTypes.map((data, i) => {
                                        if (data.value === newHeightType.value) {
                                            return (
                                                <div className="weight-type-button-selected-of-patient-profile" onClick={() => dispatch(setNewHeightType(data))}>{data.label}</div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div className="weight-type-button-of-patient-profile" onClick={() => dispatch(setNewHeightType(data))}>{data.label}</div>
                                            )
                                        }

                                    })
                                }

                            </div>
                            <h4 style={{ textAlign: "center", margin: 20, color: "grey" }}>The Calculated Lean Body Mass is {weight2 && height2 ? (weight2 / ((height2 / 100) * (height2 / 100))).toFixed(2) : 0}KG</h4>
                        </>

                }
                <br></br>
                <h3>STEP 1- b:</h3>
                <br></br>
                <h5>Select Comorbities</h5>
                <br></br>
                <div className="select-comoribities-list-main-container" >
                    {comorbities.map((data) => {
                        console.log(comorbitiesValue)
                        if (arr.includes(data.comorbidities)) {
                            return (
                                <div className="select-comoribities-list-2">
                                    <div className="selected-comorbidity">{data.comorbidities}</div>
                                    <input defaultChecked={checked} onChange={() => { setChecked(!checked); onSelectComborbities(data.comorbidities, data.reduction_per, data.warning_msg) }} type="checkbox"></input>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className="select-comoribities-list">
                                    <div className="selected-comorbidity">{data.comorbidities}</div>
                                    <input defaultChecked={checked} onChange={() => { setChecked(!checked); onSelectComborbities(data.comorbidities, data.reduction_per, data.warning_msg) }} type="checkbox"></input>
                                </div>
                            )
                        }
                    })


                    }
                </div>
            </div>
            <button className="newLamaxBtn" onClick={() => {
                props.history.push({
                    pathname: "/newAfterLamax2",
                    state: { comorbitiesValue: comorbitiesValue }
                });
                dispatch(setNewComorbities(comorbitiesValue))
            }}>Next</button>

        </div>
    )
}

export default NewAfterLamax
