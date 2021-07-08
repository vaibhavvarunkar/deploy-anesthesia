import React, { useState, useEffect } from 'react'
import Header from '../CustomComponent/Header'
import Tab from '../CustomComponent/Tab'
import '../css/index.css'
import '../css/Favourite.css'
import { Link } from 'react-router-dom'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import { API_ROOT } from '../constants'
import { useDispatch, useSelector } from 'react-redux'

const Favorites = (props) => {
    const favouriteArray = useSelector(state => state.favourite.favourites)
    const actionSummaryType = useSelector(state => state.favourite.actionSummaryType)
    const categorySelected = useSelector(state => state.favourite.categorySelected)

    const [burgerMenu, setburgerMenu] = useState(false)
    const [favouriteData, setfavouriteData] = useState([])
    const [airway_and_equipments, setairway_and_equipments] = useState([])
    const [case_tips, setcase_tips] = useState([])
    const [crises, setcrises] = useState([])
    const [drugs, setdrugs] = useState([])
    const [preoperative_evaluations, setpreoperative_evaluations] = useState([])
    const [regional_and_n_anesthesias, setregional_and_n_anesthesias] = useState([])
    const [checklists, setChecklists] = useState([])
    const [localanesthesia, setLocalanesthesia] = useState([])
    const [fluids, setFluid] = useState([])
    const [calculations_and_rs, setCalculations_and_rs] = useState([])
    const [value, setValue] = useState({});
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }

    useEffect(() => {
        getFavourite()


    }, [])

    useEffect(() => {
        if (props.location.state !== undefined) {
            addnewData()
        }
    }, [
        categorySelected === "Crises" ? crises : categorySelected === "Case Tips" ? case_tips : categorySelected === "Airway & Equipments" ? airway_and_equipments : categorySelected === "Drugs" ? drugs : categorySelected === "Preoperative Evaluation" ? preoperative_evaluations : categorySelected === "Regional Anesthesia" ? regional_and_n_anesthesias : categorySelected === "Checklists" ? checklists : categorySelected === "Local Anesthesia" ? localanesthesia : categorySelected === "Calculations And Scores" ? calculations_and_rs : ""
    ])





    const saveFavouriteList = () => {
        let airwayandequipmentsForRequest = []
        airway_and_equipments.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            airwayandequipmentsForRequest.push(obj)
        })

        let casetipsForRequest = []
        case_tips.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            casetipsForRequest.push(obj)
        })

        let crisesForRequest = []
        crises.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            crisesForRequest.push(obj)
        })

        let drugsForRequest = []
        drugs.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            drugsForRequest.push(obj)
        })

        let preoperative_evaluationForRequest = []
        preoperative_evaluations.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            preoperative_evaluationForRequest.push(obj)
        })

        let regional_and_neuraxial_anesthesiaForRequest = []
        regional_and_n_anesthesias.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            regional_and_neuraxial_anesthesiaForRequest.push(obj)
        })
        let checklistsForRequest = []
        checklists.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            checklistsForRequest.push(obj)
        })
        let localAnesthesiaForRequest = []
        localanesthesia.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            localAnesthesiaForRequest.push(obj)
        })
        let fluidnTransForRequest = []
        fluids.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            fluidnTransForRequest.push(obj)
        })
        let calculationForRequest = []
        calculations_and_rs.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            calculationForRequest.push(obj)
        })
        var token = localStorage.getItem("token")

        if (props.location.state.categorySelected === "Crises") {
            fetch(API_ROOT + `save-user-favourites?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    crises: crisesForRequest
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true") {
                        alert(res.message)
                    }
                })
        } else if (props.location.state.categorySelected === "Case Tips") {
            fetch(API_ROOT + `save-user-favourites?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    case_tips: casetipsForRequest
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true") {
                        alert(res.message)
                    }
                })

        } else if (props.location.state.categorySelected === "Airway & Equipments") {
            fetch(API_ROOT + `save-user-favourites?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    airway_and_equipments: airwayandequipmentsForRequest
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true") {
                        alert(res.message)
                    }
                })

        } else if (props.location.state.categorySelected === "Drugs") {
            fetch(API_ROOT + `save-user-favourites?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    drugs: drugsForRequest
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true") {
                        alert(res.message)
                    }
                })

        } else if (props.location.state.categorySelected === "Preoperative Evaluation") {
            fetch(API_ROOT + `save-user-favourites?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    preoperative_evaluation: preoperative_evaluationForRequest
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true") {
                        alert(res.message)
                    }
                })

        } else if (props.location.state.categorySelected === "Regional Anesthesia") {
            fetch(API_ROOT + `save-user-favourites?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    regional_and_neuraxial_anesthesia: regional_and_neuraxial_anesthesiaForRequest
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true") {
                        alert(res.message)
                    }
                })

        }
        else if (props.location.state.categorySelected === "Checklists") {
            fetch(API_ROOT + `save-user-favourites?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    checklists: checklistsForRequest
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true") {
                        alert(res.message)
                    }
                })

        }
        else if (props.location.state.categorySelected === "Local Anesthesia") {
            fetch(API_ROOT + `save-user-favourites?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    local_anesthesia: localAnesthesiaForRequest
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true") {
                        alert(res.message)
                    }
                })

        }
        else if (props.location.state.categorySelected === "Fluids And Transfusions") {
            fetch(API_ROOT + `save-user-favourites?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Fluids_and_transfusions: fluidnTransForRequest
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true") {
                        alert(res.message)
                    }
                })

        }
        else if (props.location.state.categorySelected === "Calculations And Scores") {
            fetch(API_ROOT + `save-user-favourites?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    calculation_and_scores: calculationForRequest
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true") {
                        alert(res.message)
                    }
                })

        }





    }

    const deleteFavourite = async (array, itemId) => {
        console.log(array, itemId);
        var case_tips = []
        var airway_and_equipments = []
        var crises = []
        var drugs = []
        var preoperative_evaluation = []
        var regional_and_neuraxial_anesthesia = []

        if (array === "Case Tips") {
            case_tips.push(itemId)
        }
        if (array === "Airways & Equipments") {
            airway_and_equipments.push(itemId)
        }
        if (array === "Crises") {
            crises.push(itemId)
        }
        if (array === "Drugs") {
            drugs.push(itemId)
        }
        if (array === "Preoperative Evaluation") {
            preoperative_evaluation.push(itemId)
        }
        if (array === "Regional Anesthesia") {
            regional_and_neuraxial_anesthesia.push(itemId)
        }
        const token = await localStorage.getItem('token');
        fetch(`http://admin.anesthesiaone.com/api/delete-user-favourites?token=${token}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                airway_and_equipments: airway_and_equipments,
                case_tips: case_tips,
                crises: crises,
                drugs: drugs,
                preoperative_evaluation: preoperative_evaluation,
                regional_and_neuraxial_anesthesia: regional_and_neuraxial_anesthesia

            })

        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                if (res.status === "true" && res.message === "User favourites deleted") {
                    setfavouriteData([])
                } else {
                    alert(JSON.stringify(res.data))
                }
            })
    }



    const addnewData = () => {

        if (actionSummaryType === "favourite") {
            if (categorySelected === "Crises") {
                favouriteArray.map((data) => {
                    let obj = {
                        id: '',
                        name: ''
                    }
                    obj.id = crises.length + 1
                    obj.name = data.name
                    crises.push(obj)
                })
            } else if (categorySelected === "Case Tips") {
                favouriteArray.map((data) => {
                    let obj = {
                        id: '',
                        name: ''
                    }
                    obj.id = case_tips.length + 1
                    obj.name = data.name
                    case_tips.push(obj)
                })
            } else if (categorySelected === "Airway & Equipments") {
                favouriteArray.map((data) => {
                    let obj = {
                        id: '',
                        name: ''
                    }
                    obj.id = airway_and_equipments.length + 1
                    obj.name = data.name
                    airway_and_equipments.push(obj)
                })

            } else if (categorySelected === "Drugs") {

                favouriteArray.map((data) => {
                    let obj = {
                        id: '',
                        drug_name: ''
                    }
                    obj.id = drugs.length + 1
                    obj.drug_name = data.name
                    drugs.push(obj)
                })

            }
            else if (categorySelected === "Preoperative Evaluation") {
                favouriteArray.map((data) => {
                    let obj = {
                        id: '',
                        name: ''
                    }
                    obj.id = preoperative_evaluations.length + 1
                    obj.name = data.name
                    preoperative_evaluations.push(obj)
                })

            }
            else if (categorySelected === "Regional Anesthesia") {
                favouriteArray.map((data) => {
                    let obj = {
                        id: '',
                        name: ''
                    }
                    obj.id = regional_and_n_anesthesias.length + 1
                    obj.name = data.name
                    regional_and_n_anesthesias.push(obj)
                })


            }
            else if (categorySelected === "Checklists") {
                favouriteArray.map((data) => {
                    let obj = {
                        id: '',
                        name: ''
                    }
                    obj.id = checklists.length + 1
                    obj.name = data.name
                    checklists.push(obj)
                })


            }
            else if (categorySelected === "Local Anesthesia") {
                favouriteArray.map((data) => {
                    let obj = {
                        id: '',
                        name: ''
                    }
                    obj.id = localanesthesia.length + 1
                    obj.name = data.name
                    localanesthesia.push(obj)
                })


            }

            else if (categorySelected === "Calculations And Scores") {
                favouriteArray.map((data) => {
                    let obj = {
                        id: '',
                        name: ''
                    }
                    obj.id = calculations_and_rs.length + 1
                    obj.name = data.name
                    calculations_and_rs.push(obj)
                })


            }
            setValue({})
        }

    }

    const getFavourite = () => {
        var token = localStorage.getItem('token')
        fetch(API_ROOT + `get-user-favourites?token=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(res => {
                if (res.status === "true" && res.message === "User favourites data") {
                    setairway_and_equipments(res.airway_and_equipments)
                    setcase_tips(res.case_tips)
                    setcrises(res.crises)
                    setdrugs(res.drugs)
                    setpreoperative_evaluations(res.preoperative_evaluations)
                    setregional_and_n_anesthesias(res.regional_and_n_anesthesias)
                    setChecklists(res.checklists)
                    setLocalanesthesia(res.localanesthesia)
                    setFluid(res.fluids)
                    setCalculations_and_rs(res.calculations_and_rs)

                } else {
                    alert(res.message)
                }
            })

    }




    return (
        <div  >

            <BurgerMenuModal modalIsOpen={burgerMenu} />

            <Header onMenuClick={() => burgerMenuClick()} />
            <div className="index-tab-container" >
                <div className="tab-container" >
                    <Link to="/casesummary" className="tab-container-tabs" >
                        START A CASE
                    </Link>

                    <Link to="/favourite" className="tab-container-tabs active-tab" >
                        FAVOURITE
                    </Link>
                    <Link className="tab-container-tabs" to="/recent" >CASES</Link>





                    <Link to="/allaction" className="tab-container-tabs" >ACTION LIBRARY</Link>

                </div>

            </div>
            <div className="favourite-container" >
                {/* <div className="row"> */}
                {/* <div className="col-md-2"></div> */}
                {/* <div className="col-md-8"> */}
                <strong style={{ marginBottom: 10, position: "relative", right: 100 }}>Default Favourite</strong>
                <div className="favourite-default-list-container" >
                    <div className="circle" >
                    </div>
                    <div style={{ marginLeft: 25, cursor: "pointer" }} >
                        Case Tips
                    </div>
                </div>
                <div className="all-action-subcontainer-content-1"></div>
                <div className="favourite-default-list-container" >
                    <div className="circle" >
                    </div>
                    <div style={{ marginLeft: 15, cursor: "pointer" }} >
                        <Link style={{ listStyle: "none", textDecoration: "none", color: "black" }} to="/crises"> Crises</Link>
                    </div>
                </div>
                <div className="all-action-subcontainer-content-1"></div>
                <div className="favourite-default-list-container" >
                    <div className="circle" >
                    </div>
                    <div style={{ marginLeft: 15, cursor: "pointer" }} >
                        Drugs

                    </div>
                </div>
                <div style={{ marginLeft: 40 }} className="favourite-default-list-container" >
                    <div className="circle" >
                    </div>
                    <div style={{ marginLeft: 15, cursor: "pointer" }}>
                        Antibiotics

                    </div>
                </div>
                <div style={{ marginLeft: 40 }} className="favourite-default-list-container" >
                    <div className="circle" >
                    </div>
                    <div style={{ marginLeft: 15, cursor: "pointer" }} >
                        Emergency Drugs

                    </div>
                </div>
                <div className="all-action-subcontainer-content-1"></div>
                <div className="favourite-default-list-container" >
                    <div className="circle" >
                    </div>
                    <div style={{ marginLeft: 15, cursor: "pointer" }}>
                        Insert Image

                    </div>
                </div>
                <div className="all-action-subcontainer-content-1"></div>
                <div className="favourite-default-list-container" >
                    <div className="circle" >
                    </div>
                    <div style={{ marginLeft: 15, cursor: "pointer" }}>
                        <Link style={{ listStyle: "none", textDecoration: "none", color: "black" }} to="/note"> Insert Notes</Link>

                    </div>
                </div>
                <div className="all-action-subcontainer-content-1"></div>
                <div className="favourite-default-list-container" >
                    <div className="circle" >
                    </div>
                    <div style={{ marginLeft: 15, cursor: "pointer" }} >
                        LA MAX Calculator

                    </div>
                </div>
                <div className="all-action-subcontainer-content-1"></div>
                <div className="favourite-default-list-container" >
                    <div className="circle" >
                    </div>
                    <div style={{ marginLeft: 15, cursor: "pointer" }} >
                        <Link style={{ listStyle: "none", textDecoration: "none", color: "black" }} to="/preoperativeevaluation"> Preoperative Evaluation</Link>
                    </div>
                </div>
                <div className="all-action-subcontainer-content-1"></div>
                <div className="favourite-default-list-container" >
                    <div className="circle" >
                    </div>
                    <div style={{ marginLeft: 15, cursor: "pointer" }}  >
                        Regional & Neuraxial Anesthesia

                    </div>
                </div>
                <div className="all-action-subcontainer-content-1"></div>

                <strong>User Favourite </strong>
                {airway_and_equipments.length === 0 && case_tips.length === 0 && crises.length === 0 && drugs.length === 0 && preoperative_evaluations.length === 0 && regional_and_n_anesthesias.length === 0 ?
                    <div>
                        You Do Not Have Any Favorites Yet
                    </div> :
                    <></>
                }

                {
                    airway_and_equipments.map((data) => {
                        return (
                            <>
                                <div className="favourite-list-container" >
                                    <div>{data.id}.{data.name}</div>
                                    <div onClick={() => deleteFavourite("Airways & Equipments", data.id)} >X</div>
                                </div>
                                <div className="all-action-subcontainer-content-1"></div>
                            </>

                        )
                    })
                }


                {
                    case_tips.map((data) => {

                        return (
                            <>
                                <div className="favourite-list-container" >
                                    <div>{data.id}.{data.name}</div>
                                    <div onClick={() => deleteFavourite("Case Tips", data.id)} className="cancel-button-container" >X</div>

                                </div>
                                <div className="all-action-subcontainer-content-1"></div>
                            </>


                        )
                    })
                }

                {
                    crises.map((data) => {

                        return (
                            <>
                                <div className="favourite-list-container" >
                                    <div>{data.id}.{data.name}</div>
                                    <div onClick={() => deleteFavourite("Crises", data.id)} className="cancel-button-container" >X</div>

                                </div>
                                <div className="all-action-subcontainer-content-1"></div>
                            </>

                        )
                    })
                }

                {
                    drugs.map((data) => {

                        return (
                            <>
                                <div className="favourite-list-container" >
                                    <div>{data.id}.{data.drug_name}</div>
                                    <div onClick={() => deleteFavourite("Drugs", data.id)} className="cancel-button-container" >X</div>

                                </div>
                                <div className="all-action-subcontainer-content-1"></div>
                            </>

                        )
                    })
                }

                {
                    preoperative_evaluations.map((data) => {

                        return (
                            <>
                                <div className="favourite-list-container" >
                                    <div>{data.id}.{data.name}</div>
                                    <div onClick={() => deleteFavourite("Preoperative Evaluation", data.id)} className="cancel-button-container" >X</div>

                                </div>
                                <div className="all-action-subcontainer-content-1"></div>
                            </>

                        )
                    })
                }

                {
                    regional_and_n_anesthesias.map((data) => {

                        return (
                            <>
                                <div className="favourite-list-container" >
                                    <div>{data.id}.{data.name}</div>
                                    <div onClick={() => deleteFavourite("Regional Anesthesia", data.id)} className="cancel-button-container" >X</div>

                                </div>
                                <div className="all-action-subcontainer-content-1"></div>
                            </>

                        )
                    })
                }
                <div className="favourite-add-more-btn" onClick={() => props.history.push('/allactionforactionsummary?addinto=favourite')} >
                    Add
                </div>

                <div onClick={() => saveFavouriteList()} className="save-button-container" >Save</div>
                {/* </div> */}
                {/* <div className="col-md-2"></div> */}
                {/* </div> */}

            </div>
        </div >

    )
}

export default Favorites
