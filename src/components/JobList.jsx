import React from 'react'
import Loader from './Loader'
import SingleJob from './SingleJob'

const JobList = ({jobs, isLoading}) => {
    console.log(jobs)
    return (
        <div>
            {
                isLoading ? <Loader />  : jobs.map((job) => {
                    return <SingleJob job={job}/>
                })
            }
        </div>
    )
}

export default JobList
