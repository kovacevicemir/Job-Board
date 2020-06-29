import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Jobs from './Jobs'

function App() {

  const mockJobs = [
    {title:'SWE', company:'Google',},
    {title:'DE', company:'BING',},
    {title:'USA', company:'ADT',},
    {title:'CA', company:'VEXA',},
    {title:'TR', company:'dREE',},
]

  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
