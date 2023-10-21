import React, { useState } from 'react'
import Header from '../components/Header'
import Status from '../components/Status'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

const CheckStatus = () => {
    const [acknoledgementId, setAID] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [responseData, setRD] = useState(null);

    const search = async () => {
        setLoading(true);
        const params = {
            acknoledgementId
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/grievance/checkStatus`, { params });
            setLoading(false);
            toast.success(response.data.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: 0,
                theme: "colored",
            });
            setRD(response.data.grievance);
        } catch (err) {
            setLoading(false);
            toast.error(err.response.data.msg, {
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
        return acknoledgementId !== "";
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
                <form action="">
                    <div className="mb-3">
                        <label className="form-label" id="basic-addon1"><span className='required'>*</span> Acknowledgement No.</label>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" value={acknoledgementId} onChange={(e) => setAID(e.target.value)} required={true} />
                    </div>
                    <div className='text-center mb-5'>
                        <button type="submit" className={`btn btn-primary ${(isLoading || !checksum()) && "disabled"}`} onClick={(e) => {
                            e.preventDefault();
                            if (checksum()) {
                                search();
                            } else {
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

                            {isLoading && <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>}
                            {!isLoading && "Check Status"}</button>
                    </div>
                </form>
            </div>
            {responseData !== null && <Status status={responseData.status} ackno={responseData.acknoledgementId} grievance={responseData.grievanceCategory} remarks={responseData.grievanceReply == null ? "--" : responseData.grievanceReply} />}
            <Footer />
        </div>
    )
}

export default CheckStatus
