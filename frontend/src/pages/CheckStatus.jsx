import React from 'react'
import Header from '../components/Header'
import Status from '../components/Status'

const CheckStatus = () => {
    return (
        <div>
            <Header />
            <div className='text-center mt-5'>
                <p className='fs-3 fw-bold'>Grievance Status</p>
                <p className='required'>Fill all the fields with * mark</p>
            </div>
            <div className='container mt-2 col-lg-4 col-sm-12 '>
                <form action="" >
                    <div className="mb-3">
                        <label className="form-label" id="basic-addon1"><span className='required'>*</span> Acknowledgement No.</label>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" required={true} />
                    </div>
                    <div className='text-center mb-5'>
                        <button type="submit" class="btn btn-primary disabled">Check Status</button>
                    </div>
                </form>
            </div>
            <Status  status="pending" ackno="SGRNO12345" grievance="sample grievance" remarks="sample remarks"  />
            <Status  status="approved" ackno="SGRNO12345" grievance="sample grievance" remarks="sample remarks"  />
            <Status  status="rejected" ackno="SGRNO12345" grievance="sample grievance" remarks="sample remarks"  />
        </div>
    )
}

export default CheckStatus