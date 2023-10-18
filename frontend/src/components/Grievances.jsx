import React, { useState } from 'react'
import Pagination from './Pagination'
import grievances from '../data/grievances'

const Grievances = () => {
    const [ current ,setCurrent ] = useState("pending") 
    return (
        <div className='container mt-5 mb-5'>
            <p className='text-center fw-bold'>Grivances</p>
            <div className="card text-center">
                <div className="card-header d-flex justify-content-center align-items-center">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <a className={`nav-link ${current=="pending" && "active"}`} aria-current="true" href="#" onClick={(e) => {
                                e.preventDefault()
                                setCurrent("pending")
                            }}>Pending</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${current=="approved" && "active"}`} aria-current="true" href="#" onClick={(e) => {
                                e.preventDefault()
                                setCurrent("approved")
                            }}>Approved</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${current=="rejected" && "active"}`} aria-current="true" href="#" onClick={(e) => {
                                e.preventDefault()
                                setCurrent("rejected")
                            }}>Rejected</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    {
                        current=="pending" && <Pagination itemsPerPage={5} grievances={grievances} /> 
                    }
                    {
                        current=="approved" && <Pagination itemsPerPage={2} grievances={grievances} />
                    }
                    {
                        current=="rejected" && <Pagination itemsPerPage={3} grievances={grievances} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Grievances