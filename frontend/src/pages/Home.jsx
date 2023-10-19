import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import { useNavigate } from 'react-router-dom'
import grievances from '../data/grievances'
import Grievances from '../components/Grievances'
import Footer from '../components/Footer'

const Home = () => {
    const navigate = useNavigate();
    const r_token= localStorage.getItem("r_token");
    // localStorage.removeItem("r_token")
    return (
        <div className='bg-light'>
            <Header />

            <div className='container text-center mt-5 bg-white p-4 border rounded'>
                <p className='fs-3 fw-bold text-center'>Staff Grievance Redressal Portal</p>
                <div className='row mb-2 container'>
                    <div className='col-lg-6 col-sm-12 text-sm-center text-lg-start'><p className='text-sm-center text-lg-start fw-bold'>What is Staff Grievance Redressal?</p></div>
                    <div className='col-lg-6 col-sm-12 text-sm-start text-lg-end'><button className='btn btn-primary btn-sm'  onClick={(e) => {
                        e.preventDefault()
                        navigate("/grievanceForm")
                    }}>Apply for Grievance</button></div>
                </div>
                <div className='border-left-yellow container text-start mb-4 p-3  bg-yellow '>
                    <small>

                        The Grievance Redressal system is an accessible web-based platform created specifically for staff. It enables them to easily submit their concerns and issues at any time from anywhere. This platform's primary goal is to ensure that the concerns of staff are addressed promptly and effectively by the relevant departments within the institution.
                    </small>
                </div>
            </div>
            {r_token && <Grievances />}
            <Footer />
        </div>
    )
}

export default Home