import React, { useState } from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registeration() {
    const [formData,setFormData]=useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmpassword:''

    })
    
    
    const [errors,setErrors]=useState({})
    const[valid, setValid]=useState(true)
    const navigate = useNavigate()
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(formData);
        let isvalid=false;
        let validationErrors={}
        if(formData.firstname === "" || formData.firstname === null){
            isvalid=false;
            validationErrors.firstname = "First Name Required"
        }

        if(formData.lastname === "" || formData.lastname === null){
            isvalid=false;
            validationErrors.lastname = "Last Name Required"
        }
        if(formData.email === "" || formData.email === null){
            isvalid=false;
            validationErrors.email = "Email Required"
        }else if(!/\S+@\S+\.\S+/ .test(formData.email)){
            isvalid=false;
            validationErrors.email = "Email is not valid"
        }
        if(formData.password === "" || formData.password === null){
            isvalid=false;
            validationErrors.password = "Password Required"
        }else if(formData.password.length < 6){
            isvalid=false;
            validationErrors.password = "Password should contain atleast 6 characters"
        }
        if(formData.confirmpassword !== formData.password){
            isvalid=false
            validationErrors.confirmpassword="Passwords didn't match"
        }
        try {
            const response = await axios.get(`http://localhost:5000/users?email=${formData.email}`);
            if (response.data.length > 0) {
                isvalid = false;
                validationErrors.email = "Email already exists";
            }
        } catch (error) {
            console.error("Error checking email existence:", error);
        }





        setErrors(validationErrors)
        setValid(isvalid)

     
        





        if(Object.keys(validationErrors).length ===0){


           
            axios.post('http://localhost:5000/users', formData)
            .then(result => {
                alert("Registered Successfully")
                navigate('/login')
            })
            .catch(err=> console.log(err))
        }

        }
    
  return (
    <div>
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card className="px-4">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center text-uppercase ">
                  CREATE ACCOUNT
                </h2>
                <div className="mb-3">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="Name">
                      <Form.Label className="text-center">First Name</Form.Label>
                      <Form.Control name='firstname' type="text" placeholder="Enter Name" onChange={(event)=>setFormData({...formData,firstname: event.target.value})}/>
                      {
                        valid ? <></> : <span className='text-danger'>{errors.firstname}</span>

                    }
                    </Form.Group>
                   
                    <Form.Group className="mb-3" controlId="Name">
                      <Form.Label className="text-center">Last Name</Form.Label>
                      <Form.Control name='lastname' type="text" placeholder="Enter Name" onChange={(event)=>setFormData({...formData,lastname: event.target.value})}  />
                      {
                        valid ? <></> : <span className='text-danger'>{errors.lastname}</span>

                    }
                    </Form.Group>

                    

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Email address
                      </Form.Label>
                      <Form.Control type="email" name='email' placeholder="Enter email" onChange={(event)=>setFormData({...formData,email: event.target.value})} />
                      {
                        valid ? <></> : <span className='text-danger'>{errors.email}</span>

                    }
                    </Form.Group>

                    


                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control name='password' type="password" placeholder="Password" onChange={(event)=>setFormData({...formData,password: event.target.value})}/>
                      {
                        valid ? <></> : <span className='text-danger'>{errors.password}</span>

                    }
                    </Form.Group>
                   


                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control name='confirmpassword' type="password" placeholder="Password" onChange={(event)=>setFormData({...formData,confirmpassword: event.target.value})} />
                      {
                        valid ? <></> : <span className='text-danger'>{errors.confirmpassword}</span>

                    }
                    </Form.Group>
                   
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicCheckbox"
                    ></Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit" >
                        Create Account
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3">
                    <p className="mb-0  text-center">
                      Already have an account??{' '}
                      <Link to="/login">Login Now</Link>
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Registeration
