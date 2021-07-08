import React, { useState } from 'react'

const OtherBtn = () => {
    const [otherVisible, setOtherVisible] = useState(false)
    return (
        <div>
            <label style={{ cursor: 'pointer' }} onClick={() => setOtherVisible(!otherVisible)}>OTHER / NON-LISTED</label>
            <div style={{ width: 300, margin: 5 }}>
                {
                    otherVisible ? <div><input style={{ margin: 5 }} type="text" placeholder="Type here"></input> <br></br> <input style={{ margin: 5 }} type="file"></input></div> : null
                }
            </div>
        </div>
    )
}

export default OtherBtn
