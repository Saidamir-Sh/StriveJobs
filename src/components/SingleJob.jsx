import React from 'react'
import { Card } from 'react-bootstrap'
const SingleJob = () => {
    return (
        <Card className='mx-auto my-2' style={{ width: '70%' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default SingleJob
