import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import Home from './components/Home';

const App = () => {

  {/*
   const [jobs, setJobs] = useState({})
  const [isLoading, setisLoading] = useState(true)


  useEffect( () => {
    let fetchJobs = async () => {
      try {
        let response = await fetch("https://strive-jobs-api.herokuapp.com/jobs?search=")
        
        if(response.ok) {
          const data = await response.json()
          setJobs(data.data)
          setisLoading(false)
        }
      } catch (error) {
        alert(error)
      }
    }
    fetchJobs()
  }, [])

  
  */}


  return (
    <div className="App">
      <Home  />
    </div>
  );
}

export default App;
