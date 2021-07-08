import React, { useState } from 'react'
import upload from '../images/uploadIMg.png'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import { API_ROOT } from '../constants'
import { Link } from 'react-router-dom'

const Note = (props) => {
    const [message, setmessage] = useState(null)
    const [file, setFile] = useState(null)
    const [formdata, setFormData] = useState('')
    const [burgerMenu, setburgerMenu] = useState(false)
    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }

    const saveExtraNotes = () => {
        const token = localStorage.getItem('token')
        formdata.append("image", file)
        formdata.append("message", message)
        formdata.append("op_type", "testing")
        formdata.append("case_id", "27")


        fetch(API_ROOT + `save-extranotes?token=${token}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',


            },
            body: formdata

        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                if (res.status === "true") {
                    console.log(res)
                    alert(res.message)
                }
            })


    }

    return (
        <div>
            <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header onMenuClick={() => burgerMenuClick()} />
            <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>NOTE</h4>
                <h4 className="hidn">CRISES</h4>
            </header>

            <div class="col-md-12 pl-0 pr-2">

                <div class="conArea d-block">
                    {/* <div class="LHeadings text-center">
                        <a href="#" onclick="goBack()"><i class="fii icon-down-arrow"></i></a> Note
                    </div> */}

                    <div class="row justify-content-center ">
                        <div class="col-md-9 savedCases">
                            <div class="whtbxs">
                                <form>
                                    <div class="form-group">
                                        <label>Message</label>
                                        <textarea onChange={(e) => setmessage(e.target.value)} class="form-control">Message</textarea>

                                    </div>


                                    <div class="form-group uploadsB">
                                        <label>Upload a Image</label>
                                        <span class="uploads">
                                            <img src={upload} />
                                            <input onChange={(e) => setFile(e.target.files)} type="file" id="myFile" name="filename" />

                                        </span>
                                    </div>
                                    <div class="form-group mt-4 text-center mb-4">
                                        <button onClick={() => saveExtraNotes()} type="submit" class="btn font-weight-bold text-uppercase">Submit</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Note