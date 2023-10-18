import React from 'react'

const Status = (props) => {
    return (
        <div className='container mt-4 mb-4 bg-white col-lg-4 border rounded p-3 '>
            <div className='container d-flex justify-content-center align-items-center'>
                <p className='fs-5 fw-bold text-center'>
                    {
                        (props.status=="pending") && <i class="fa-sharp fa-regular fa-clock fa-2xl mb-4" style={{ color: "#fbff00" }}></i>
                    }
                    {
                        (props.status=="approved") && <i class="fa-solid fa-check fa-2xl mb-2" style={{ color: "#5ff529" }}></i>
                    }
                    {
                        (props.status=="rejected") && <i class="fa-sharp fa-solid fa-xmark fa-2xl mb-2" style={{ color: "#ff0000" }}></i>
                    }
                    <br />
                    {
                        (props.status=="pending") && "Pending"
                    }
                    {
                        (props.status=="approved") && "Approved"
                    }
                    {
                        (props.status=="rejected") && "Rejected"
                    }
                </p>
            </div>
            <div className='container text-center'>
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="row">Ack No.</th>
                            <td>{props.ackno}</td>
                        </tr>
                        <tr>
                            <th scope="row">Grievance</th>
                            <td>{props.grievance}</td>
                        </tr>
                        <tr>
                            <th scope="row">Remarks</th>
                            <td >{props.remarks}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Status