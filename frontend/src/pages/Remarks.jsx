import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const Remarks = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [status, setStatus] = useState("approved");
    const [grievanceReply, setGR] = useState("");
    const r_token = localStorage.getItem('r_token');
    const [grievance, setGrievance] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [pageLoading, setpLoading] = useState(false);

    const checksum = function () {
        if (grievanceReply !== "") {
            return true;
        }
        return false;
    }

    useEffect(() => {
        const fetchGrievace = async () => {
            try {
                setpLoading(true)
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/grievance/fetchGrievance`, {
                    headers: {
                        id: id,
                        Authorization : localStorage.getItem('r_token'),
                    }
                });
                if (response.data.status) {
                    setGrievance(response.data.grievance);
                    setpLoading(false)
                }
                else {
                    toast.error(`Internal Server Error!`, {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        progress: 0,
                        theme: "colored",
                    });
                }
            }
            catch (err) {
                toast.error(`Network error`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: 0,
                    theme: "colored",
                });
            }
        }
        fetchGrievace()

    }, [])

    const sendRemarks = async () => {
        const params = {
            status,
            grievanceReply
        }

        try {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/grievance/updateGrievance`, {
                headers: {
                    id: id,
                    Authorization : localStorage.getItem('r_token'),
                },
                params
            });
            console.log(response.data);
            if (response.data.status) {
                setLoading(false);
                setStatus("approved");
                setGR("");
                toast.success(`Sent Remarks successfully!`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: 0,
                    theme: "colored",
                });
                setTimeout(() => {
                    navigate("/");
                }, 1500)
            }
            else {
                toast.error(`Internal Server Error!`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: 0,
                    theme: "colored",
                });
            }
        }
        catch (err) {
            console.log(err);
            setLoading(false);
            toast.error(`Network Error! Please check your internet`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: 0,
                theme: "colored",
            });
        }
    }
    return (
        <div>
            <div className='fixed-top'>
                <ToastContainer />
            </div>
            <Header />
            <div className={`container mt-5 col-lg-6 col-sm-12`}>
                <div className='text-center'>
                    <p className='fs-5 fw-bold'>Grievance Details</p>
                    <p className='fs-6'>Acknowledgement No. {grievance.acknoledgementId}</p>
                </div>
                <form>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Faculty Id</span>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" value={grievance.memberId} aria-describedby="basic-addon1" required={true} disabled />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Full Name</span>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" value={grievance.fullName} disabled />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Mail address</span>
                        <input type="mail" className="form-control" placeholder="" aria-label="Username" value={grievance.email} disabled />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Aadhar Number</span>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" value={grievance.aadharNumber} disabled />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Phone Number</span>
                        <span className="input-group-text">+91</span>
                        <input type="text" className="form-control" required={true} value={grievance.phoneNumber} disabled />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Title</span>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" value={grievance.title} aria-describedby="basic-addon1" required={true} disabled />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Category</span>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" value={grievance.grievanceCategory} aria-describedby="basic-addon1" required={true} disabled />
                    </div>
                    <div className="input mb-3">
                        <label htmlFor="" className='form-label'>Grievance Description</label>
                        <textarea className="form-control" aria-label="With textarea" rows={6} required={true} value={grievance.grievance} disabled draggable="false" style={{ resize: "none" }}></textarea>
                    </div>
                    <div className="mb-4">
                        <label for="basic-url" className="form-label">Supporting Documents Link</label>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon3">Link</span>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" required={true} value={grievance.supportingDocs} disabled />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className='form-label'>Set status of Grievance</label>
                        <select class="form-select mb-3" aria-label="Default select example" value={status} onChange={(e) => setStatus(e.target.value)}  >
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>
                    <div className="input mb-3">
                        <label htmlFor="" className='form-label'>Your Remarks</label>
                        <textarea className="form-control" aria-label="With textarea" rows={6} required={true} value={grievanceReply} onChange={(e) => setGR(e.target.value)}></textarea>
                    </div>

                    <div className='text-center mb-5'>
                        <button type="submit" class={`btn btn-primary ${isLoading || (!checksum() && "disabled")}`} onClick={(e) => {
                            e.preventDefault()
                            if (checksum()) {
                                sendRemarks();
                            }
                            else {
                                toast.error("Please enter all fields", {
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
                            {!isLoading && "Submit"}
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Remarks;