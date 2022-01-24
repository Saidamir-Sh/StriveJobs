import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
    return (
        <div className='w-100 vh-100 d-flex align-items-center justify-content-center'>
            <Spinner animation='border' />
        </div>
    )
}

export default Loader
