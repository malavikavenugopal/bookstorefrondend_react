import React, { useState } from 'react'
import {  Button,  Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Registeration() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: ''

  })


  const [errors, setErrors] = useState({})
  const [valid, setValid] = useState(true)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    let isvalid = false;
    let validationErrors = {}
    if (formData.firstname === "" || formData.firstname === null) {
      isvalid = false;
      validationErrors.firstname = "First Name Required"
    }

    if (formData.lastname === "" || formData.lastname === null) {
      isvalid = false;
      validationErrors.lastname = "Last Name Required"
    }
    if (formData.email === "" || formData.email === null) {
      isvalid = false;
      validationErrors.email = "Email Required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid = false;
      validationErrors.email = "Email is not valid"
    }
    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      validationErrors.password = "Password Required"
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationErrors.password = "Password should contain atleast 6 characters"
    }
    if (formData.confirmpassword !== formData.password) {
      isvalid = false
      validationErrors.confirmpassword = "Passwords didn't match"
    }
    try {
      const response = await axios.get(`https://bookstorebackend-react.onrender.com/users?email=${formData.email}`);
      if (response.data.length > 0) {
        isvalid = false;
        validationErrors.email = "Email already exists";
      }
    } catch (error) {
      console.error("Error checking email existence:", error);
    }





    setErrors(validationErrors)
    setValid(isvalid)








    if (Object.keys(validationErrors).length === 0) {



      axios.post('https://bookstorebackend-react.onrender.com/users', formData)
        .then(result => {
          toast.success("Registered Successfully")
          navigate('/login')
        })
        .catch(err => console.log(err))
    }

  }

  return (
    <div>
      <Header />


      <section class="background-radial-gradient overflow-hidden">

        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div class="row gx-lg-5 align-items-center mb-5">
            <div class="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
              <h1 class="my-5 display-5 fw-bold ls-tight" style={{ color: " white" }}>
               NEW CUSTOMERS
              </h1>
              <p class="mb-4 opacity-70" style={{ color: "white" }}>
               Creating an account has many benefits: check out faster, keep more than one address, track orders and more.
              </p>
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

              <div class="border rounded-3 bg-glass">
                <div class="card-body px-4 py-5 px-md-5">
              

                    <div class="row">
                      <Form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="Name">
                              <Form.Label className="text-center" style={{ fontSize: "14px" }}>First Name</Form.Label>
                              <Form.Control name='firstname' type="text" placeholder="Enter Name" onChange={(event) => setFormData({ ...formData, firstname: event.target.value })} />
                              {
                                valid ? <></> : <span className='text-danger' style={{fontSize:'12px'}}>{errors.firstname}</span>

                              }
                            </Form.Group>
                          </div>
                          <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="Name">
                              <Form.Label className="text-center" style={{ fontSize: "14px" }}>Last Name</Form.Label>
                              <Form.Control name='lastname' type="text" placeholder="Enter Name" onChange={(event) => setFormData({ ...formData, lastname: event.target.value })} />
                              {
                                valid ? <></> : <span className='text-danger' style={{fontSize:'12px'}}>{errors.lastname}</span>

                              }
                            </Form.Group>
                          </div>
                        </div>






                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center" style={{ fontSize: "14px" }}>
                            Email address
                          </Form.Label>
                          <Form.Control type="email" name='email' placeholder="Enter email" onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
                          {
                            valid ? <></> : <span className='text-danger' style={{fontSize:'12px'}}>{errors.email}</span>

                          }
                        </Form.Group>




                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label style={{ fontSize: "14px" }}>Password</Form.Label>
                          <Form.Control name='password' type="password" placeholder="Password" onChange={(event) => setFormData({ ...formData, password: event.target.value })} />
                          {
                            valid ? <></> : <span className='text-danger' style={{fontSize:'12px'}}>{errors.password}</span>

                          }
                        </Form.Group>



                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label style={{ fontSize: "14px" }}>Confirm Password</Form.Label>
                          <Form.Control name='confirmpassword' type="password" placeholder="Password" onChange={(event) => setFormData({ ...formData, confirmpassword: event.target.value })} />
                          {
                            valid ? <></> : <span className='text-danger' style={{fontSize:'12px'}}>{errors.confirmpassword}</span>

                          }
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="d-grid">

                          <Button variant="dark" type="submit" >
                           Sign Up
                          </Button>

                        </div>
                      </Form>
                    </div>





<br></br>
                    <div class="text-center">
                      <p>or sign up with:</p>
                      <button type="button" class="btn btn-link btn-floating mx-1 text-dark">
                        <i class="fab fa-facebook-f"></i>
                      </button>

                      <button type="button" class="btn btn-link btn-floating mx-1 text-dark">
                        <i class="fab fa-google"></i>
                      </button>

                      <button type="button" class="btn btn-link btn-floating mx-1 text-dark">
                        <i class="fab fa-twitter"></i>
                      </button>

                      <button type="button" class="btn btn-link btn-floating mx-1 text-dark">
                        <i class="fab fa-github"></i>
                      </button>
                    </div>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </div>
  )
}

export default Registeration
