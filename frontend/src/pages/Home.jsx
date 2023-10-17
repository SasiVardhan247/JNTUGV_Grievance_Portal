import React from 'react'
import Header from '../components/Header'
import Grievances from '../components/Grievances'


const Home = () => {
    return (
        <div className='bg-light'>
            <Header />

            <div className='container text-center mt-5 bg-white p-4 border rounded'>
                <p className='fs-3 fw-bold text-start'>Public Grievance Redressal</p>
                <div className='row mb-2'>
                    <div className='col-lg-6 col-sm-12 col-md-6 text-start'><p className='text-start fw-bold'>What is Public Grievance Redressal?</p></div>
                    <div className='col-lg-6 col-sm-6 col-md-6 text-end'><button className='btn btn-primary btn-sm'>Apply for Grievance</button></div>
                </div>
                <div className='border-left container text-start bg-light mb-4'>
                    <small>
                        Grievance Redressal system is the platform based on web technology which primarily aims to enable submission of grievances by the aggrieved citizens from anywhere and anytime to State Departments who scrutinize and take action for speedy and favorable redress of these grievances. Tracking grievances is also facilitated on this portal through the system generated unique registration number.
                    </small>
                </div>
                <Grievances />
            </div>
        </div>
    )
}

export default Home