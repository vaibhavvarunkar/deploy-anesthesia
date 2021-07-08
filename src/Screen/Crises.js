import React, { useEffect, useState } from 'react'
import Header from '../CustomComponent/Header'
// import '../css/RiskEvalution.css'
import { API_ROOT } from '../constants'
import "../css/crises.css"
import { Link } from 'react-router-dom'




const Crises = (props) => {
    const [actionLibraryData, setactionLibraryData] = useState([])
    const [subname, setSubname] = useState("")
    const [fileName, setFileName] = useState(null);

    useEffect(() => {
        var token = localStorage.getItem("token")
        fetch(API_ROOT + `action-library-data?token=${token}`, {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(res => {
                if (res.status === "true") {
                    res.data.drugs.forEach(element => {
                        element.name = element.drug_name;
                    });
                    // console.log(res.data.drugs)

                    const obj = [{
                        name: "Crises",
                        displayName: "CRISES",
                        data: res.data.crises
                    }]
                    console.log(obj)

                    setactionLibraryData(obj)
                }
            })
    }, [])

    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }
    return (
        <div>
            <Header onMenuClick={() => burgerMenuClick()} />
            <div className='casename-container'>
                casename:{fileName === null ? '-' : fileName}
            </div>
            <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/favourite"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>CRISES</h4>
                <h4 className="hidn">CRISES</h4>
            </header>
            {
                actionLibraryData.map((data) => {
                    return (
                        <>
                            {data.data.map((data1, index) => {
                                return (
                                    <>
                                        <div className="row">
                                            <div className="col-md-4"></div>
                                            <div className="col-md-4">
                                                <div className="upper">
                                                    <Link className="crises-name">{index + 1}</Link>
                                                    <Link className="name">{data1.name}</Link>
                                                    {
                                                        data1.crises_sub_type.map((name) => {
                                                            return (
                                                                <div>
                                                                    <p className="subTypes" onClick={() => {
                                                                        props.history.push({
                                                                            pathname: '/crisessubtype',
                                                                            state: { name: name.name }
                                                                        });
                                                                    }}>{name.name}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-md-4"></div>
                                        </div>
                                    </>
                                )
                            })}
                        </>
                    )
                })
            }
        </div>
    )
}

export default Crises
