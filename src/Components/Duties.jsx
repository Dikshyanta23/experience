import React from 'react'
import {FaHandPointRight} from 'react-icons/fa';

const Duties = ({duty}) => {
  return (
    <div className='single-duty'>
        <p className='icon'><FaHandPointRight /></p>
        <p className='unit-duty'>{duty}</p>
      
    </div>
  )
}

export default Duties
