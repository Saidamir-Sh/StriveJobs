import React from 'react'
import { useState, useEffect } from 'react'
import JobList from './JobList'
import { Container, Col, Row } from "react-bootstrap"
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
import CartIndicator from './CartIndicator'

function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    const [isLoading, setisLoading] = useState(true)
    const [jobs, setJobs] = useState({})


    const fetchSearched = async (searchQuery) => {
        try {
            let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${searchQuery}&limit=10`)

            if(response.ok) {
                let data  = await response.json()
                setJobs(data.data)
                setisLoading(false)
                console.log(data)
            }
        } catch (error) {
            
        }
    }
    useEffect(() => {
        fetchSearched(searchQuery)
    }, [])

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
                                <FormControl type="text"
                                 placeholder="Search" 
                                 className="mr-sm-2" 
                                 onChange={(e) => {
                                     setSearchQuery(e.target.value)
                                 }}
                                 
                                 />
                                <Button variant="outline-success">Search</Button>
                              </Form>
                            </Navbar.Collapse>
                            <CartIndicator />
                        </Navbar>                                      
                    </Col>
                    <Col>
                        <JobList jobs={jobs} isLoading={isLoading} searchQuery={searchQuery}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
