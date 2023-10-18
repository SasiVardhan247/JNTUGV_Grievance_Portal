import React, { useState } from 'react'
import Header from '../components/Header'
import Status from '../components/Status'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CheckStatus = () => {
    const [acknoledgementId, setAID] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [responseData, setRD] = useState(null);
    const search = async () => {
        setLoading(true);
        const params = {
            acknoledgementId
        }
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/grievance/checkStatus`, { params });
        setLoading(false);
        if (response.data.search_status) {
            if (response.data.grievance != null) {
                toast.success("Fetched Sucessfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: 0,
                    theme: "colored",
                });
            }
            else {
                toast.error("No Record Found", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: 0,
                    theme: "colored",
                });
            }
            setRD(response.data.grievance);
        }
        else {
            toast.error("Internal Server Error", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: 0,
                theme: "colored",
            });
        }
    }
    const checksum = function () {
        if (acknoledgementId != "") {
            return true;
        }
        else {
            return false;
        }
    }
    return (
        <div>
            <div className='fixed-top'>
                <ToastContainer />
            </div>
            <Header />
            <div className='text-center mt-5'>
                <p className='fs-3 fw-bold'>Grievance Status</p>
                <p className='required'>Fill all the fields with * mark</p>
            </div>
            <div className='container mt-2 col-lg-4 col-sm-12 '>
                <form action="" >
                    <div className="mb-3">
                        <label className="form-label" id="basic-addon1"><span className='required'>*</span> Acknowledgement No.</label>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" value={acknoledgementId} onChange={(e) => setAID(e.target.value)} required={true} />
                    </div>
                    <div className='text-center mb-5'>
                        <button type="submit" class={`btn btn-primary ${(isLoading || !checksum()) && "disabled"}`} onClick={(e) => {
                            e.preventDefault();
                            if (checksum()) {
                                search();
                            }
                            else {
                                toast.error("Enter all fields", {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: false,
                                    draggable: false,
                                    progress: 0,
                                    theme: "colored",
                                });
                            }
                        }}>

                            {isLoading && <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>}
                            {!isLoading && "Check Status"}</button>
                    </div>
                </form>
            </div>
            {
                !(responseData == null) && <Status status={responseData.status} ackno={responseData.acknoledgementId} grievance={responseData.grievance} remarks={responseData.grievanceReply == null ? "--" : responseData.grievanceReply} />
            }
        </div>
    )
}

export default CheckStatus