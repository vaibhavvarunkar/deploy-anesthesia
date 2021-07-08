import React, { useState, useEffect } from 'react'
import Header from '../CustomComponent/Header'
import '../css/AllAction.css'
import '../css/casesummary.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { preopEnable, postopEnable, intraopEnable } from "../redux/ActionsSummaryActions"
import { API_ROOT } from '../constants'

const ActionSummary = (props) => {
    //redux
    const preOpRedux = useSelector((state) => state.actionSummary.preop);
    const intraOpRedux = useSelector((state) => state.actionSummary.intraop);
    const postOpRedux = useSelector((state) => state.actionSummary.postop);


    const dispatch = useDispatch();


    const [preOpVisible, setpreOpVisible] = useState(true)
    const [intraOpVisible, setintraOpVisible] = useState(false)
    const [postOpVisible, setpostOpVisible] = useState(false)
    const [isMonitoring, setisMonitoring] = useState(false)
    const [isSpecializedMonitoring, setisSpecializedMonitoring] = useState(false)
    const [isPositioning, setisPositioning] = useState(false)
    const [monitoring, setmonitoring] = useState([
        { label: 'All Standard ASA Monitors', value: 'All Standard ASA Monitors', subcategory: [] },
        { label: 'Not Standard ASA Monitors', value: 'Not Standard ASA Monitors', subcategory: [{ label: 'Pulse oximeter', value: 'Pulse oximeter' }, { label: 'Electrocardiography', value: 'Electrocardiography' }, { label: 'Noninvasive blood pressure', value: 'Noninvasive blood pressure' }, { label: 'Temperature monitor', value: 'Temperature monitor' }, { label: 'Inspired and expired gas monitoring', value: 'Inspired and expired gas monitoring' }, { label: 'Peripheral nerve stimulator for NMB monitoring', value: 'Peripheral nerve stimulator for NMB monitoring' }, { label: 'Airway pressure', value: 'Airway pressure' }] }
    ])
    const specializedMonitoring = [
        { value: 'CSF Drain', label: 'CSF Drain' },
        { value: 'TEE', label: 'TEE' },
        { value: 'Neuromonitoring', label: 'Neuromonitoring' }

    ]
    const POSITIONING = [
        { value: 'Supine', label: 'Supine' },
        { value: 'Prone', label: 'Prone' },
        { value: 'Beach chair', label: 'Beach chair' },
        { value: 'Lateral', label: 'Lateral' },
        { value: 'Lithotomy', label: 'Lithotomy' }
    ]
    const [monitoringSubcategory, setmonitoringSubcategory] = useState([])
    const [preOp, setpreOp] = useState([
        {
            id: 1,
            name: "PREOPERATIVE TESTING"
        },
        {
            id: 2,
            name: "RISK EVALUATION"
        },
        {
            id: 3,
            name: "PHYSICAL EXAM"
        },
        {
            id: 4,
            name: "PREMEDICATION"
        },

        {
            id: 5,
            name: "PREOP NOTE"
        }
    ])
    const [postOp, setpostOp] = useState([
        {
            id: 1,
            name: "ANALGESIA"
        },
        {
            id: 2,
            name: "ANTIMETIC"
        },
        {
            id: 3,
            name: "POSTOP AIRWAY"
        },
        {
            id: 4,
            name: "BLOOD PRESSURE"
        },
        {
            id: 5,
            name: "CRISES"
        },
        {
            id: 6,
            name: "POSTOP NOTE"
        },

    ])
    const [intraOp, setintraOp] = useState([
        {
            id: 1,
            name: "ANESTHESIA TYPE"
        },
        {
            id: 2,
            name: "AIRWAY"
        },
        {
            id: 3,
            name: "VASCULAR ACCESS"
        },
        {
            id: 4,
            name: "MONITORING"
        },
        {
            id: 5,
            name: "SPECIALIZED MONITORING"
        },
        {
            id: 6,
            name: "POSITIONING"
        },
        {
            id: 7,
            name: "INDUCTION"
        },
        {
            id: 8,
            name: "MAINTEANCE"
        },
        {
            id: 9,
            name: "EMERGENCE"
        },
        {
            id: 10,
            name: "CRISES"
        },
        {
            id: 11,
            name: "INTRAOP NOTE"
        }
    ])
    const [casesummary_id, setcasesummary_id] = useState(null)
    const [value, setValue] = useState();
    const [caseName, setcaseName] = useState(null)

    const refresh = () => {
        setValue({});
    }
    useEffect(() => {
        var urlParams = new URLSearchParams(window.location.search)
        setcasesummary_id(urlParams.get('caseSummaryId'))
        setcaseName(urlParams.get('caseName'))
        getActionSummaryData()
        if (props.location.state !== undefined) {

            addnewData()
        }
        console.log(preOpRedux);

        // getData()
    }, [])


    const addnewData = () => {
        if (props.location.state.actionSummaryType === "preop") {
            props.location.state.actionSummary.map((data) => {
                let obj = {
                    id: '',
                    name: ''
                }
                obj.id = preOp.length + 1
                obj.name = data.name
                preOp.push(obj)
            })
            setpreOpVisible(true)
            setintraOpVisible(false)
            setpostOpVisible(false)
            refresh()
        } else if (props.location.state.actionSummaryType === "postop") {
            props.location.state.actionSummary.map((data) => {
                let obj = {
                    id: '',
                    name: ''
                }
                obj.id = postOp.length + 1
                obj.name = data.name
                postOp.push(obj)
            })
            setpreOpVisible(false)
            setintraOpVisible(false)
            setpostOpVisible(true)

            refresh()
        } else if (props.location.state.actionSummaryType === "intraop") {
            props.location.state.actionSummary.map((data) => {
                let obj = {
                    id: '',
                    name: ''
                }
                obj.id = intraOp.length + 1
                obj.name = data.name
                intraOp.push(obj)
            })
            setpreOpVisible(false)
            setintraOpVisible(true)
            setpostOpVisible(false)

            refresh()
        }

    }

    const getActionSummaryData = () => {
        var token = localStorage.getItem('token')

        fetch(API_ROOT + `action-summary-ops?token=${token}&case_summaries_id=${casesummary_id}`, {
            method: 'GET',

        })
            .then(response => response.json())
            .then(res => {
                if (res.status === "true" && res.data.preops.length !== 0) {
                    console.log(res)
                    setpreOp(res.data.preops)
                    setintraOp(res.data.intraops)
                    setpostOp(res.data.postops)
                }
            })
    }

    const saveActionSummary = () => {
        if (preOpVisible == true) {
            setpreOpVisible(false)
            setintraOpVisible(true)
            setpostOpVisible(false)
        } else if (intraOpVisible == true) {
            setintraOpVisible(false)
            setpostOpVisible(true)
            setpreOpVisible(false)
        } else if (postOpVisible == true) {
            var postOpForRequest = []
            postOp.map((data) => {
                var obj = ""

                obj = data.name
                postOpForRequest.push(obj)
            })

            var preOpForRequest = []
            preOp.map((data) => {
                var obj = ""

                obj = data.name
                preOpForRequest.push(obj)
            })

            var intraOpForRequest = []
            intraOp.map((data) => {
                var obj = ""

                obj = data.name
                intraOpForRequest.push(obj)
            })



            console.log(postOpForRequest, preOpForRequest, intraOpForRequest)

            var token = localStorage.getItem("token")

            fetch(API_ROOT + `save-user-action-summary-ops?token=${token}`, {
                method: 'POST',
                body: JSON.stringify({
                    "case_summaries_id": casesummary_id,
                    "preops": preOpForRequest,
                    "intraops": intraOpForRequest,
                    "postops": postOpForRequest

                })

            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    alert(res.message)
                })
        }
    }

    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }
    const preOpClick = () => {
        setintraOpVisible(false)
        setpostOpVisible(false)

        setpreOpVisible(!preOpVisible)
    }

    const intraOpClick = () => {
        setpreOpVisible(false)
        setpostOpVisible(false)
        setintraOpVisible(!intraOpVisible)
    }

    const postOpClick = () => {
        setpreOpVisible(false)
        setintraOpVisible(false)
        setpostOpVisible(!postOpVisible)
    }

    const navigation = (name) => {
        if (name === "PREOPERATIVE TESTING") {
            props.history.push('/preoperativeevaluation')
        }
        if (name === "RISK EVALUATION") {
            props.history.push('/riskevalution')
        }
        if (name === "PHYSICAL EXAM") {
            props.history.push('/physicalexam')
        }
        if (name === "PREMEDICATION") {
            props.history.push('/premedication')
        }
        if (name === "PREOP NOTE") {
            props.history.push('/note')
        }
        if (name === "INTRAOP NOTE") {
            props.history.push('/note')

        }
        if (name === "ANESTHESIA TYPE") {
            props.history.push('/anesthesiatype')
        }
        if (name === "AIRWAY") {
            props.history.push('/airway')

        }
        if (name === "VASCULAR ACCESS") {
            props.history.push('/vascularaccess')

        }
        if (name === "MONITORING") {
            // setisMonitoring(!isMonitoring)
            props.history.push('/monitoring')
        }
        if (name === "SPECIALIZED MONITORING") {
            // setisSpecializedMonitoring(!isSpecializedMonitoring)
            props.history.push('/specialmonitoring')
        }
        if (name === "POSITIONING") {
            // setisPositioning(!isPositioning)
            props.history.push('/positioning')
        }
        if (name === "INDUCTION") {
            props.history.push('/induction')
        }
        if (name === "MAINTEANCE") {
            props.history.push('/maintaince')
        }
        if (name === "EMERGENCE") {
            props.history.push('/emergence')
        }
        if (name === "CRISES") {
            props.history.push('/crises')
        }
        if (name === "POSTOP AIRWAY") {
            props.history.push('/postopairway')
        }
        if (name === "POSTOP NOTE") {
            props.history.push('/note')
        }
    }

    const handleChangeMonitoring = selectedOption => {
        setmonitoringSubcategory(selectedOption.subcategory)
    }


    const saveIntraOpmains = () => {
        var token = localStorage.getItem("token")

        fetch(API_ROOT + `save-intraop-mains?token=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "case_id": "27",
                "asa_monitor": "test1",
                "not_standard_asa_monitors": ["test2", "test3"],
                "specialized_monitoring": ["test4", "test5"],
                "positioning": "test6"

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


    return (
        <div  >
            <Header onMenuClick={() => burgerMenuClick()} />
            <div className="casename-container" >
                casename:{caseName === null ? "-" : caseName}
            </div>

            <div className="case-summary-container" >
                {/* 
   <div className="case1-container" >
            <div className="case1-header" >case1</div>
            <i class="material-icons add-icon">add</i>
        </div>
        */}


            </div>

            <div className="all-action-container" >
                <div className="tab-container" >
                    {/* <Link to="/afterLogin" className="close-case-container" >
                        <img src={closecase} className="close-case-image" />

                    </Link>
                    */}



                    <Link to="/casesummary" className="tab-container-tabs" >
                        CASE SUMMARY
                    </Link>

                    <Link className="tab-container-tabs active-tab" to="/actionsummary" >ACTION SUMMARY</Link>


                </div>
                <div className="action-summary-container row" >
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="action-summary my-3" >
                            {preOpRedux ?
                                <div onClick={() => dispatch(preopEnable(false))} className="preop-container active-sub-tabs" >
                                    <div  >PREOP</div>

                                </div>
                                :
                                <div onClick={() => dispatch(preopEnable(true))} className="preop-container" >
                                    <div  >PREOP</div>

                                </div>
                            }
                            {intraOpRedux ?
                                <div onClick={() => dispatch(intraopEnable(false))} className="preop-container active-sub-tabs" >
                                    <div  >INTRAOP</div>

                                </div>

                                :
                                <div onClick={() => dispatch(intraopEnable(true))} className="preop-container" >
                                    <div  >INTRAOP</div>

                                </div>
                            }
                            {postOpRedux ?
                                <div onClick={() => dispatch(postopEnable(false))} className="preop-container active-sub-tabs" >
                                    <div >POSTOP</div>

                                </div>

                                :

                                <div onClick={() => dispatch(postopEnable(true))} className="preop-container" >
                                    <div >POSTOP</div>

                                </div>
                            }

                        </div>

                        {preOpRedux === true ?
                            <div className="preop-container-subcontainer" >
                                {preOp.map((data) => {
                                    return (
                                        <div className="action-summary-list-container" >
                                            <div onClick={() => navigation(data.name)} >{data.id}.{data.name}</div>
                                            <div><input style={{ marginLeft: 40 }} defaultChecked={true} type="checkbox" /></div>

                                        </div>

                                    )
                                })
                                }
                                <div className="add-more-button" onClick={() => props.history.push('/allactionforactionsummary?addinto=preop')} >
                                    Add
                                </div>

                            </div> : <></>
                        }

                        {
                            intraOpRedux ?
                                <div className="preop-container-subcontainer" >




                                    {intraOp.map((data) => {
                                        return (
                                            <div className="Intraop-container" >
                                                <div className="action-summary-list-container" >
                                                    <div onClick={() => navigation(data.name)} >{data.id}.{data.name}</div>
                                                    <div><input defaultChecked={true} style={{ marginLeft: 40 }} type="checkbox" /></div>

                                                </div>
                                                {
                                                    isMonitoring && data.name === "MONITORING" ?
                                                        <div className="MONITORING-input-container-subcontainer" >
                                                            <div className="MONITORING-group-container" >
                                                                {
                                                                    monitoring.map((data) => {
                                                                        console.log(data)
                                                                        return (
                                                                            <div onClick={() => handleChangeMonitoring(data)} className="MONITORING-type-button" >{data.label}</div>
                                                                        )
                                                                    })
                                                                }



                                                            </div>
                                                            <div className="MONITORING-group-container" >
                                                                {
                                                                    monitoringSubcategory.map((data) => {
                                                                        return (
                                                                            <div className="MONITORING-sub-type-button" >{data.label}</div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                        :
                                                        <></>
                                                }
                                                {
                                                    isSpecializedMonitoring && data.name === "SPECIALIZED MONITORING" ?
                                                        <div className="MONITORING-input-container-subcontainer" >
                                                            <div className="MONITORING-group-container" >
                                                                {
                                                                    specializedMonitoring.map((data) => {
                                                                        return (
                                                                            <div className="MONITORING-type-button" >{data.label}</div>
                                                                        )
                                                                    })
                                                                }



                                                            </div>

                                                        </div>
                                                        :
                                                        <></>
                                                }

                                                {
                                                    isPositioning && data.name === "POSITIONING" ?
                                                        <div className="MONITORING-input-container-subcontainer" >
                                                            <div className="MONITORING-group-container" >
                                                                {
                                                                    POSITIONING.map((data) => {
                                                                        return (
                                                                            <div className="MONITORING-type-button" >{data.label}</div>
                                                                        )
                                                                    })
                                                                }



                                                            </div>

                                                        </div>
                                                        :
                                                        <></>
                                                }


                                            </div>

                                        )
                                    })
                                    }
                                    <div className="add-more-button" onClick={() => props.history.push('/allactionforactionsummary?addinto=intraop')} >
                                        Add
                                    </div>
                                </div> : <></>
                        }
                        {
                            postOpRedux ?
                                <div className="preop-container-subcontainer" >
                                    {postOp.map((data) => {
                                        return (
                                            <div className="action-summary-list-container" >
                                                <div onClick={() => navigation(data.name)} >{data.id}.{data.name}</div>
                                                <div><input defaultChecked={true} style={{ marginLeft: 40 }} type="checkbox" /></div>

                                            </div>
                                        )
                                    })
                                    }
                                    <div className="add-more-button" onClick={() => props.history.push('/allactionforactionsummary?addinto=postop')} >
                                        Add
                                    </div>
                                </div> : <></>
                        }




                        <div className="next-button-container" >

                            <div onClick={() => saveActionSummary()} className="next-button" >
                                NEXT
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>


            </div>
        </div>
    )
}

export default ActionSummary