import React, { useEffect, useState } from 'react'
import { API_ROOT } from '../constants'
import { Link } from 'react-router-dom'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import LamaxSubHeader from "./LamaxSubHeader"
import Select from 'react-select'
import "../css/newLamaxHeader.css"
import { useDispatch, useSelector } from 'react-redux'
import { setNewAdminValue, setNewConc, setNewDrug1 } from '../redux/NewLamaxActions'

const NewAfterLamax2 = (props) => {
    console.log(props);
    const [drugData, setDrugData] = useState([])
    const [anesthesiaData, setAnesthesiaData] = useState([])
    const [consume, setConsume] = useState(0)
    const [remaining1, setRemaining] = useState(0)
    const [checkedNum, setCheckedNum] = useState(0)

    const [burgerMenu, setburgerMenu] = useState(false)
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }


    const weight2 = useSelector(state => state.newLamax.weight2)
    const newComorbities = useSelector(state => state.newLamax.newComorbities)
    const drug1 = useSelector(state => state.newLamax.drug1)
    const newConc = useSelector(state => state.newLamax.newConc)
    const newAdminValue = useSelector(state => state.newLamax.newAdminValue)

    const [option, setOption] = useState([])
    const mixtureOptions = [
        { value: 'Individual', label: 'Individual' },
        { value: 'Mixture', label: "Mixture" },
    ];

    var totalReduction = 0;

    newComorbities.map((data) => {
        totalReduction = totalReduction + parseInt(data.value) / 100
    })
    const [checked, setChecked] = useState(false);


    const [refresh, setrefresh] = useState({})

    const dispatch = useDispatch()


    useEffect(() => {
        getLAMAXData()

    }, [])

    useEffect(() => {

    }, [refresh])

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
                    setDrugData(res.data.drugs)
                    console.log(res.data.drugs);
                } else {
                    alert(res.message)
                }
            })

    }

    var obj = {
        name: "",
        value: "",
        dosageMaxValue: ""
    }

    // var checkedNum = 0;

    var resultValue1 = 0;

    const countCheck = () => {
        setCheckedNum(checkedNum + 1)
        setChecked(!checked)
    }

    const onSelectAnesthesia = (value, valueType, plainValue) => {
        console.log(valueType, value, plainValue)
        obj = {
            name: value,
            type: valueType,
            dosageMaxValue: plainValue
        }
        anesthesiaData.push(obj)
        dispatch(setNewDrug1(obj))
        setrefresh({})
        // countCheck()
    }

    const onChangeAdminValue = (value) => {
        console.log(value);
        dispatch(setNewAdminValue(value));
    }
    return (
        <div>
            <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header onMenuClick={() => burgerMenuClick()} />
            <LamaxSubHeader />
            <div className="newLamaxDiv">
                <h1>LOCAL ANESTHETIC MAX</h1>
            </div>
            <div className="newLamaxDiv2">
                <h4>Step 2 of 3: 1st Admin</h4>
            </div>
            <div className="lamaxContent">
                <h4>STEP 2- a: DRUG PREPARATION</h4>
                <br></br>
                <Select className="newLamaxDd" defaultValue={mixtureOptions.filter(opt => opt.label === "Individual")} placeholder="select mixture type" options={mixtureOptions} />
            </div>
            <div className="lamaxContent">
                <h4>STEP 2- b: SELECT DRUGS</h4>
                <br></br>
                <h5 style={{ fontWeight: 700 }}>DRUG A</h5>
                <br></br>
                <br></br>
                <div >
                    {
                        drugData.map((drug, i) => {
                            console.log(checkedNum)
                            return (
                                <div className="main-medicine">

                                    <div className="main-bg row">
                                        <div className="col-8">
                                            <h4><i className="fas fa-syringe syringe"></i> {drug.name}</h4>
                                        </div>
                                        <div className="col-4">
                                            <h4> <i class="fas fa-info-circle info text-right"></i></h4>
                                        </div>
                                    </div>
                                    <div className="capsule">
                                        <div className="sub-medicine row my-2">
                                            <div className="col-8">
                                                <h5>Plain</h5>
                                            </div>
                                            <div className="col-4">
                                                <input defaultChecked={checked} disabled={checkedNum === 0 && checkedNum < 1 ? false : true} type="checkbox" onChange={() => { countCheck(); onSelectAnesthesia(drug.name, "Plain", drug.plain_max) }} ></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="capsule">
                                        <div className="sub-medicine row my-2">
                                            <div className="col-8">
                                                <h5>Epinephrine</h5>
                                            </div>
                                            <div className="col-4">
                                                <input defaultChecked={checked} disabled={checkedNum === 0 && checkedNum < 1 ? false : true} onChange={() => { countCheck(); onSelectAnesthesia(drug.name, "Epinephrine", drug.epinephrine_max) }} type="checkbox"></input>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            )
                        })

                    }
                    <span>% Concentration<input style={{ marginLeft: 10 }} onChange={(e) => dispatch(setNewConc(e.target.value / 100))}></input></span>
                </div>
                <br></br>
                <span>Admin volume, ml <input style={{ marginLeft: 10 }} onChange={(e) => onChangeAdminValue(e.target.value)}></input></span>
                <br></br>
                <h4>{resultValue1 = (((drug1.dosageMaxValue * weight2) / newConc).toFixed(0) - ((drug1.dosageMaxValue * weight2) / newConc).toFixed(0) * totalReduction).toFixed(0) / 1000} % of total LA MAX given.</h4>
                <br></br>
                <h4>{(newAdminValue / resultValue1) * 100} ml of drug A remaining.</h4>
                <br>
                </br>
                <button className="newLamaxBtn add-drug-btn" onClick={() => props.history.push("/newAfterLamax3")}>ADD DRUG</button>
            </div>
            <br></br>
            {

            }
            <button className="newLamaxBtn" onClick={() => {
                props.history.push({
                    pathname: '/newAfterLamax3',
                    state: { anesthesiaData: anesthesiaData }
                });
            }
            }>Next</button>
            <button className="newLamaxBtn" style={{ float: "left" }} onClick={() => props.history.push("/newAfterLamax")}>Back</button>
        </div >
    )
}

export default NewAfterLamax2
