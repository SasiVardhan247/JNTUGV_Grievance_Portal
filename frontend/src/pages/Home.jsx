import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const Home = () => {
    return (
        <div className='bg-light'>
            <Header />

            <div className='container text-center mt-5 bg-white p-4 border rounded'>
                <p className='fs-3 fw-bold text-center'>Public Grievance Redressal</p>
                <div className='row mb-2 container'>
                    <div className='col-lg-6 col-sm-12 text-sm-center text-lg-start'><p className='text-sm-center text-lg-start fw-bold'>What is Public Grievance Redressal?</p></div>
                    <div className='col-lg-6 col-sm-12 text-sm-start text-lg-end'><button className='btn btn-primary btn-sm'>Apply for Grievance</button></div>
                </div>
                <div className='border-left-yellow container text-start mb-4 p-3  bg-yellow '>
                    <small>
                        
The Grievance Redressal system is an accessible web-based platform created specifically for students and staff. It enables them to easily submit their concerns and issues at any time from anywhere. This platform's primary goal is to ensure that the concerns of students and staff are addressed promptly and effectively by the relevant departments within the institution
                    </small>
                </div>
            </div>
            <Pagination itemsPerPage={2} />
        </div>
    )
}

export default Home