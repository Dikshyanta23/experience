import React from 'react'
import Duties from './Duties'
import {v4 as uuidv4} from 'uuid'

const Job = ({jobs, currentItem}) => {

    
    const {title, dates, duties, company} = jobs[currentItem]
  return (
    <section className="job">
      <h2>{title}</h2>

      <span className="company">{company}</span>
        <h4 className='date'>{dates}</h4>
      {duties.map((duty) => {
        const id = uuidv4();
        return <Duties duty={duty} key={id} />;
      })}
    </section>
  );
}

export default Job
