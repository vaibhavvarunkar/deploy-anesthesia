import { data } from 'jquery';
import React, { useState } from 'react'
import { ReactReduxContext } from 'react-redux';
import { API_ROOT } from '../constants';
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import Header from '../CustomComponent/Header'
import { Link } from 'react-router-dom';
import "../css/drugInfo.css"

const DrugInfo = (props) => {
    console.log(props);
    const [burgerMenu, setburgerMenu] = useState(false)
    const [resData, setResData] = useState([])
    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }
    const runFunc = (id) => {
        console.log(id);
        var token = localStorage.getItem("token")
        fetch(API_ROOT + `drug-surgeries?token=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "surgery_id": id
            })
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                if (res.status === "true") {
                    console.log(res.data)
                    setResData(res.data)
                }
            })
    }
    return (
        <div>
            <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header onMenuClick={() => burgerMenuClick()} />
            <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/allaction"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>SURGERY TYPE</h4>
                <h4 className="hidn">CRISES</h4>
            </header>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 drug-content">
                    {
                        props.location.state.map((data, i) => {
                            console.log(data)
                            return (
                                <>
                                    <p style={{ cursor: "pointer" }} onClick={() => runFunc(data.id)} key={i}>{data.drug_name}</p>
                                    <div className="all-action-subcontainer-content-1"></div>
                                </>
                            )
                        })
                    }
                    <br></br>
                    {
                        resData ?
                            resData.map((data2, index) => {
                                return (
                                    <>
                                        <h1>Result</h1>
                                        <p>first line antibiotic: {data2.first_line_antibiotics}</p>
                                        <p>colonization: {data2.if_mrsa_colonization}</p>
                                        <p>severe penicillin: {data2.if_severe_penicillin}</p>
                                    </>
                                )
                            })
                            : <></>
                    }
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default DrugInfo
