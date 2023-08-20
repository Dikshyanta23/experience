import { useState } from 'react'
import data from './data'
import './index.css'
import Job from './Components/Job';
import Buttonbar from './Components/Buttonbar';

function App() {
  const [currentItem, setCurrentItem] = useState(0)
  const [jobs, setJobs] = useState(data)
  return (
    <main>
      <div className='title'>
        <h2>My Experience</h2>
        <div className='underline'></div>
      </div>
      <section className='main-content'>
        <Buttonbar jobs = {jobs} currentItem= {currentItem} setCurrentItem = {setCurrentItem}/>
      <Job jobs = {jobs} currentItem = {currentItem} />
      </section>
    </main>
  )
}

export default App
