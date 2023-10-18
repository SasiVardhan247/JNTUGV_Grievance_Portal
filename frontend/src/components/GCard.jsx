import React from 'react'

const GCard = (props) => {
    return (
        <div className='text-start border-bottom mb-3 rounded bg-white border p-3'>
            <p className=''>{props.title}</p>
            <div className='rounded bg-green border-left-green p-2 mb-2'>
                <small className=''>{props.grievance}</small>
            </div>
            <div className='row container'>
                <div className='col-lg-6 col-sm-12 text-sm-start'> <small className='text-black  text-opacity-50'>Posted on {props.grievancePostingTime}</small> </div>
                <div className='col-lg-6 col-sm-12 text-lg-end text-sm-start'><small className='text-black  text-opacity-50'>{props.grievanceResponseTime && "Replied on " + props.grievanceResponseTime} </small> </div>
            </div>
            {!props.grievanceReply ? <div className='container'><small>Not yet replied</small></div> :
                <div className="accordion" id={props._id}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#i" + props.i} aria-expanded="true" aria-controls={"i" + props.i}>
                                Comment
                            </button>
                        </h2>
                        <div id={"i" + props.i} className="accordion-collapse collapse show" data-bs-parent={"#i" + props.i}>
                            <div className="accordion-body">
                                {props.grievanceReply}
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default GCard