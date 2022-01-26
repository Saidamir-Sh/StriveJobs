import React from 'react';
import { Button } from 'react-bootstrap'
import { BsSave } from 'react-icons/bs'
import { useNavigate } from 'react-router';

const CartIndicator = () => {

  const navigate = useNavigate()

  return (
      <Button onClick={() => navigate("/savedJobs")} variant="success"><BsSave color='white'/></Button>
  )

}

export default CartIndicator;
