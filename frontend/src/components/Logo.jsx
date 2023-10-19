import React from 'react'
import jntugv from "../jntugv_logo.png";

const Logo = () => {
    return (
        <div className='d-flex align-items-center justify-content-center mb-3'>
            <div>
                <div className='d-flex align-items-center justify-content-center row'>
                    <div className='col-lg-1 col-sm-12 text-center'><a href="/"><img src={jntugv} alt="" style={{ width: "80px" }} /></a></div>
                    <div className='col-lg-11 text-center container-fluid'><p> <strong className=''>Jawaharlal Nehru Technological University - Gurajada, Vizianagaram</strong> <br /> Vizianagaram, Andhra Pradesh - 535003</p></div>
                </div>
            </div>
        </div>
    )
}

export default Logo