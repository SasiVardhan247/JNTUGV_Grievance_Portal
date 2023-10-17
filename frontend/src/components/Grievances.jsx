import React from 'react'
import grievances from '../data/grievances'
import GCard from './GCard'


const Grievances = () => {
  return (
    <div>
        <div className=''><p className='fw-bold'>Grivances</p></div>
        {grievances.length == 0 ?  "No grivances up until now" : grievances.map((g) => <GCard  {...g} />)}
    </div>
  )
}

export default Grievances