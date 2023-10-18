import React from 'react'
import Header from '../components/Header'

const GrievanceForm = () => {
    return (
        <div>
            <Header />
            <div className='text-center mt-5'>
                <p className='fs-3 fw-bold'>Grievance Form</p>
                <p className='required'>Fill all the fields with * mark</p>
            </div>
            <div className='container mt-2 col-lg-6 col-sm-12 '>
                <form action="" >
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><span className='required'>*</span> Member Id </span>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" required={true} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><span className='required'>*</span>Name </span>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" required={true} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><span className='required'>*</span>Mail address</span>
                        <input type="mail" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" required={true} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><span className='required'>*</span>Aadhar Number</span>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" required={true} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><span className='required'>*</span>Phone Number</span>
                        <span className="input-group-text">+91</span>
                        <input type="text" className="form-control" required={true} />
                    </div>
                    <div className="input mb-3">
                        <label htmlFor="" className='form-label'><span className='required'>*</span>Grievance Description</label>
                        <textarea className="form-control" aria-label="With textarea" rows={6} required={true} ></textarea>
                    </div>
                    <div className="mb-4">
                        <label for="basic-url" className="form-label"><span className='required'>*</span>Any Supporting Documents (Attachments)</label>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon3">Link</span>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" required={true} />
                        </div>
                        <div className="form-text" id="basic-addon4">*Upload the file in Gdrive or any other cloud storage service and paste the file link here. Make sure to put the file access to public, Otherwise your grievance may get rejected</div>
                    </div>
                    <div className='text-center mb-5'>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GrievanceForm