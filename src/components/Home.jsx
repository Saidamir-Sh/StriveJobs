import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import JobList from './JobList'
import { Container, Col, Row } from "react-bootstrap"
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
import CartIndicator from './CartIndicator'
import { fetchJobs } from '../redux/action'

function Home() {

    const [query, setQuery] = useState("")
    const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search=";
    const jobs = useSelector((state) => state.jobsArr.data)
    const isLoading = useSelector((state) => state.jobsArr.isLoading)
    console.log(isLoading)
    
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchJobs(baseEndpoint, query))
    }, [query])

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
                                 onChange={handleChange}
                                 
                                 />
                                <Button variant="outline-success">Search</Button>
                              </Form>
                            </Navbar.Collapse>
                            <CartIndicator />
                        </Navbar>                                      
                    </Col>
                    <Col>
                        <JobList jobs={jobs} isLoading={isLoading} searchQuery={query}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
