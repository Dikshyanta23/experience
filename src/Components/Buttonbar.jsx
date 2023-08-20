import React from 'react'

const Buttonbar = ({jobs, currentItem, setCurrentItem}) => {
  return (
    <div className='btn-bar'>
        {jobs.map((job, index)=> {
            return (
                <button key= {index} className='btn' onClick = {()=> setCurrentItem(index)}>
                    {job.company}
                </button>
            )
        })}
    </div>
  )
}

export default Buttonbar
