import React from 'react'

const GCard = (props) => {
    return (
        <div className='text-start border-bottom mb-3'>
            <p className=''>{props.title}</p>
            <div className='rounded bg-light p-2 mb-2'>
                <small className=''>{props.grievance}</small>
            </div>
        </div>
    )
}

export default GCard