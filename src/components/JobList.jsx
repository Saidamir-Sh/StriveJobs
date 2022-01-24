import React from 'react'
import Loader from './Loader'
import SingleJob from './SingleJob'

const JobList = ({jobs, isLoading, searchQuery}) => {
    console.log(jobs)
    return (
        <div>
            {
                isLoading ? <Loader />  : jobs.filter((job) => {
                    if(searchQuery === "") {
                        return job
                    } else if (
                        job.title.toLowerCase().includes(searchQuery.toLowerCase())
                    ) {
                        return job
                    }
                }).map((job) => {
                    return <SingleJob key={job._id} job={job}/>
                })
            }
        </div>
    )
}

export default JobList
