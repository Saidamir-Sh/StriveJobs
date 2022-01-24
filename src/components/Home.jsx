import React from 'react'
import JobList from './JobList'
import { Container, Col, Row } from "react-bootstrap"
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'

function Home({ jobs, isLoading }) {
    return (
        <div>
            <Container fluid={true} className='container-100  px-0'>
                <Row>
                    <Col md={12}>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="#home">StriveJobs</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                              <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                              </Form>
                            </Navbar.Collapse>
                        </Navbar>                                      
                    </Col>
                    <Col>
                        <JobList jobs={jobs} isLoading={isLoading} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
