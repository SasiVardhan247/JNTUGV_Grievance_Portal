import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Header from '../components/Header'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

const GrievanceForm = () => {
    const [memberId, setMid] = useState("");
    const [fullName, setFN] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPN] = useState("");
    const [aadharNumber, setAN] = useState("");
    const [grievance, setGrivance] = useState("");
    const [title, setTitle] = useState("");
    const [supportingDocs, setSD] = useState("");
    const [grievanceCategory, setGC] = useState("1");
    const navigate = useNavigate();
    const [isLoading , setLoading] = useState(false);

    const checksum = function () {
        if (memberId !== "" && fullName !== "" && email !== "" && phoneNumber !== "" && aadharNumber !== "" && grievance !== "" && title !== "" && supportingDocs !== "" && grievanceCategory !== "") {
            return true
        }
        return false;
    }
    
    const login = async () => {
        setLoading(true);
        const params = {
            memberId,
            fullName,
            email,
            phoneNumber,
            aadharNumber,
            grievance, 
            title,
            supportingDocs,
            grievanceCategory
        }
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/grievance/applyGrievance`, { params });
        setLoading(false);
        if (response.data.status) {
            toast.success(`Grieviance Successfully submitted! Your Acknowledgment No is ${response.data.acknoledgementId}. Please take a note of it or take a screen shot`, {
                position: "top-right",
                autoClose: 60000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: 0,
                theme: "colored",
            });
            setMid("");
            setFN("");
            setEmail("");
            setPN("");
            setAN("");
            setGrivance("");
            setTitle("");
            setSD("");
            setGC("1");
        }
        else {
            toast.error("Server error! Try again after some time", {
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
    return (
        <div>
            <div className='fixed-top'>
                <ToastContainer />
            </div>
            <Header />
            <div className={`text-center mt-5`}>
                <p className='fs-3 fw-bold'>Grievance Form</p>
                <p className='required'>Fill all the fields with * mark</p>
            </div>
            <div className={`container mt-2 col-lg-6 col-sm-12`}>
                <form>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><span className='required'>*</span>Faculty Id</span>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" value={memberId} onChange={(e) => setMid(e.target.value)} aria-describedby="basic-addon1" required={true} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><span className='required'>*</span>Title</span>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" value={title} onChange={(e) => setTitle(e.target.value)} aria-describedby="basic-addon1" required={true} />
                    </div>
                    <div>
                        <label htmlFor="" className='form-label'>Select Category of Grievance</label>
                        <select class="form-select mb-3" aria-label="Default select example" value={grievanceCategory} onChange={(e) => setGC(e.target.value)}>
                            <option value="1">Sample cat 1</option>
                            <option value="2">Sample cat 2</option>
                            <option value="3">Sample cat 3</option>
                        </select>

                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><span className='required'>*</span>Full Name</span>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" value={fullName} onChange={(e) => setFN(e.target.value)} aria-describedby="basic-addon1" required={true} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><span className='required'>*</span>Mail address</span>
                        <input type="mail" className="form-control" placeholder="" aria-label="Username" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="basic-addon1" required={true} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><span className='required'>*</span>Aadhar Number</span>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" value={aadharNumber} onChange={(e) => setAN(e.target.value)} aria-describedby="basic-addon1" required={true} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><span className='required'>*</span>Phone Number</span>
                        <span className="input-group-text">+91</span>
                        <input type="text" className="form-control" required={true} value={phoneNumber} onChange={(e) => setPN(e.target.value)} />
                    </div>
                    <div className="input mb-3">
                        <label htmlFor="" className='form-label'><span className='required'>*</span>Grievance Description</label>
                        <textarea className="form-control" aria-label="With textarea" rows={6} required={true} value={grievance} onChange={(e) => setGrivance(e.target.value)} ></textarea>
                    </div>
                    <div className="mb-4">
                        <label for="basic-url" className="form-label"><span className='required'>*</span>Any Supporting Documents (Attachments)</label>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon3">Link</span>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" required={true} value={supportingDocs} onChange={(e) => setSD(e.target.value)} />
                        </div>
                        <div className="form-text" id="basic-addon4">*Upload the file in Gdrive or any other cloud storage service and paste the file link here. Make sure to put the file access to public, Otherwise your grievance may get rejected</div>
                    </div>
                    <div className='text-center mb-5'>
                        <button type="submit" class={`btn btn-primary ${isLoading || (!checksum() && "disabled")}`} onClick={(e) => {
                            e.preventDefault()
                            if (checksum()) {
                                login();
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
                            { isLoading && <span class="spinner-border spinner-border-sm" aria-hidden="true"></span> }
                            { !isLoading && "Submit" }
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default GrievanceForm