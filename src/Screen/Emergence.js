import React, { useEffect, useState } from 'react'
import Header from '../CustomComponent/Header'
import '../css/RiskEvalution.css'
import OtherBtn from './OtherBtn'
import { Link } from 'react-router-dom'
const Emergence = (props) => {
    const [emergenceArray, setemergenceArray] = useState([
        {
            id: 1,
            name: 'AIRWAY'
        },
        {
            id: 2,
            name: 'ANALGESIA'
        },
        {
            id: 3,
            name: 'REVERSAL'
        },
        {
            id: 4,
            name: 'ANTIEMETICS'
        },
        // {
        //     id: 5,
        //     name: 'OTHER/NOT LISTED'
        // },


    ])
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }





    const navigateToRiskEvalutionType = (value) => {
        if (value === "AIRWAY") {
            props.history.push('/emergenceairway')
        }
    }


    return (
        <div>

            <Header onMenuClick={() => burgerMenuClick()} />
            <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>EMERGENCE</h4>
                <h4 className="hidn">CRISES</h4>
            </header>
            <div className="risk-evalution-main-container" >
                <div className="risk-evalution-list-container" >
                    {
                        emergenceArray.map((data) => {
                            return (
                                <div className="risk-ev" style={{ cursor: 'pointer' }}  >
                                    <h4 onClick={() => navigateToRiskEvalutionType(data.name)}>{data.name}</h4>
                                </div>
                            )
                        })
                    }
                </div>
                {/* <OtherBtn />
                <div className="favourite-add-more-btn" onClick={() => props.history.push('/allactionforactionsummary?addinto=favourite')} >
                    Add
                </div> */}



            </div>
            <div className="risk-ev">
                <h4><OtherBtn /></h4>
            </div>
            <div className="btn-btn"  >
                <a className="risk-btn" style={{ backgroundColor: "violet" }} onClick={() => props.history.push('/allactionforactionsummary?addinto=favourite')}>Add</a>
            </div>
            <div className="btn-btn">
                <a className="risk-btn">Submit</a>
            </div>
        </div>
    )
}

export default Emergence