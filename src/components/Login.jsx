import React, { useState } from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
    const [formData,setFormData]=useState({
        email:'',
        password:'',
        })
        const [user, setUser] = useState(null);
        const [errors,setErrors]=useState({})
        const[valid, setValid]=useState(true)
        const navigate = useNavigate()
        const handleSubmit = async(e) =>{
            e.preventDefault();
            console.log(formData);
            let isvalid=false;
            let validationErrors={}
             
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
            

           


           
                axios.get('http://localhost:5000/users')
                .then(result => {
                   result.data.map(user=> {
                    if(user.email === formData.email){
                        if(user.password === formData.password){
                            alert("Login Successfully")
                            setUser({ firstName: user.firstname, lastName: user.lastname,email:user.email });
                           
                           
                           //to store name in (welcome part)home page 
                            localStorage.setItem('user', JSON.stringify({ firstName: user.firstname, lastName: user.lastname,email:user.email }));
                            navigate('/')
                        } else{
                            isvalid = false;
                            validationErrors.password = "Password is incorrect"
                        }
                    }else if(formData.email !== ""){
                        isvalid =false;
                        validationErrors.email = "Email is not registered"
                    }
                })
                setErrors(validationErrors)
                setValid(isvalid)
                
                })
                .catch(err=> console.log(err))
           
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
                  LOGIN PAGE
                </h2>
                <div className="mb-3">
                  <Form onSubmit={handleSubmit}>
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
                      controlId="formBasicCheckbox"
                    ></Form.Group>
                    <div className="d-grid">
                      <Button variant="success" type="submit" >
                        Login
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3">
                    <p className="mb-0  text-center">
                      Don't have an account?{' '}
                      <Link to="/registration">Signup Now</Link>
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

export default Login
