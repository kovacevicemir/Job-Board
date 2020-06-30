import React, {useState, useEffect} from 'react';
import './App.css';
import Jobs from './Jobs'

function App() {
  const [jobs, setjobs] = useState([])

  const JOB_API_URL = 'http://localhost:3001/jobs'

  const mockJobs = [
    {title:'SWE', company:'Google',},
    {title:'DE', company:'BING',},
    {title:'USA', company:'ADT',},
    {title:'CA', company:'VEXA',},
    {title:'TR', company:'dREE',},
  ]
  
  const fetchJobs = async (updatejobs) =>{
    const res = await fetch(JOB_API_URL)
    let json = await res.json()

    //updateState
    updatejobs(json)
  }

  useEffect(() => {
    const jobs = fetchJobs(setjobs)
  }, [])

  return (
    <div className="App">
      <Jobs jobs={jobs} />
    </div>
  );
}

export default App;
