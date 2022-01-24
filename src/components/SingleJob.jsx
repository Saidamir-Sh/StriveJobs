import React from 'react'
import { Card } from 'react-bootstrap'
const SingleJob = ({job}) => {
    return (
        <Card key={job._id} className='mx-auto my-2' style={{ width: '70%' }}>
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href={job.url}>Apply</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default SingleJob
