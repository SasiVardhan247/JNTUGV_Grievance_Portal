import React, { useCallback, useEffect, useState } from 'react'
import Pagination from './Pagination'
import grievances from '../data/grievances'
import axios from 'axios'

const Grievances = () => {
    const [ current ,setCurrent ] = useState("pending")
    const [grievance,setGrievance] = useState({}) 
    const r_token = localStorage.getItem('r_token')
    const fetchGrievances = useCallback(async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/grievance/getGrievance`, {
            headers: {
              Authorization: r_token,
            }
          });
          console.log(response)
          setGrievance(response.data.grievances);
        } catch (error) {
          console.error('Error fetching grievances:', error);
        }
      }, [r_token]);

    useEffect(()=>{
        fetchGrievances()
    },[fetchGrievances])

    function filterGrievancesByStatus(grievances, status) {
        for (const grievance of grievances) {
            console.log(grievance);
          }
        return grievances.filter(grievance => grievance.status === status);
    }      
    return (
        <div className='container mt-5 mb-5'>
            <p className='text-center fw-bold'>Grivances</p>
            {grievance && 
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
                        current=="pending" && <Pagination itemsPerPage={5} grievances={filterGrievancesByStatus(grievances, "pending")} /> 
                    }
                    {
                        current=="approved" && <Pagination itemsPerPage={2} grievances={filterGrievancesByStatus(grievances, "approved")} />
                    }
                    {
                        current=="rejected" && <Pagination itemsPerPage={3} grievances={filterGrievancesByStatus(grievances, "rejected")} />
                    }
                </div>
            </div>}
        </div>
    )
}

export default Grievances