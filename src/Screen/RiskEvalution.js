import React, { useEffect, useState } from 'react'
import Header from '../CustomComponent/Header'
import '../css/RiskEvalution.css'
import { API_ROOT } from '../constants'
import axios from 'axios'
import { Link } from 'react-router-dom'

const RiskEvalution = (props) => {
    const [data, setData] = useState([])
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {

    }, [data])
    const getData = async () => {
        var token = localStorage.getItem("token")
        var url = API_ROOT + `all-risk-scores-names?token=${token}`
        const res = await axios.get(url)
        setData(res.data.data)
        console.log(res.data.data);
    }

    const forwardData = (id) => {
        props.history.push({
            pathname: "/rcri",
            state: id
        })
    }
    return (
        <div>
            <Header onMenuClick={() => burgerMenuClick()} />
            <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>RISK EVALUATION</h4>
                <h4 className="hidn">CRISES</h4>
            </header>
            <div className="main-risk">
                {
                    data.length ?
                        data.map((info) => {
                            return (
                                <>
                                    <div className="risk-ev">
                                        <h4 onClick={() => forwardData(info.id)}>{info.name}</h4>
                                    </div>
                                </>
                            )
                        })
                        :
                        <></>
                }
                <div className="btn-btn">
                    <a className="risk-btn">Add</a>
                </div>
            </div>
        </div>
    )
}

export default RiskEvalution
