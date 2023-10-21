import React from 'react'
import { useNavigate } from 'react-router-dom';

const GCard = (props) => {
    const navigate = useNavigate();
    const parseDate = function (dateString) {
        const date = new Date(dateString);
        date.setUTCHours(date.getUTCHours() + 5);
        date.setUTCMinutes(date.getUTCMinutes() + 30);
        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1; // Months are zero-based
        const year = date.getUTCFullYear();
        let hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();
        const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
        const amOrPm = hours >= 12 ? "PM" : "AM";
        if (hours > 12) {
            hours -= 12; // Convert to 12-hour format
        }
        const formattedDate = `${day}-${month}-${year} ${weekday} ${hours}:${minutes}:${seconds} ${amOrPm}`;
        return formattedDate;
    }
    return (
        <div className='text-start border-bottom mb-3 rounded bg-white border p-3'>
            <p className=''>{props.title}</p>
            <small className='fw-bold'>Ack.No : {props.acknoledgementId}</small>
            <div className='bg-green border-left-green p-2 mb-2'>
                <small className=''>{props.grievance}</small>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 text-sm-start'> <small className='text-black  text-opacity-50'>Posted on {parseDate(props.grievancePostingTime)}</small> </div>
                {
                    (props.status === "approved" || props.status === "rejected") && <div className='col-lg-6 col-sm-12 text-lg-end text-sm-start'><small className='text-black  text-opacity-50'>{props.grievanceResponseTime && "Replied on " + parseDate(props.grievancePostingTime)} </small> </div>
                }
            </div>
            {
                props.status === "pending" && <div className='row mt-1'>
                    <div className='col-sm-6'>
                        <button className='btn btn-primary btn-sm' type='button' onClick={(e) => {
                            e.preventDefault();
                            navigate(`/remarks/${props._id}`);
                        }}>
                            Send remarks
                        </button>
                    </div>
                </div>
            }
            {
                (props.status === "approved" || props.status === "rejected") && <div>
                    <div>
                        <small className='fw-bold'>Your Response</small><br />
                        <small className=''>{props.grievanceReply}</small>
                    </div>
                </div>
            }
        </div>
    )
}

export default GCard