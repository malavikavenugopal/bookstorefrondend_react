import React, { useState } from 'react'
import {  Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
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
            

           


           
                axios.get('https://bookstorebackend-react.onrender.com/users')
                .then(result => {
                   result.data.map(user=> {
                    if(user.email === formData.email){
                        if(user.password === formData.password){
                           toast.success("Login Successfully")
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
      <Header/>
 
     



    <section class="vh-100" style={{background:'url(https://img.freepik.com/free-photo/modern-bookstore-showcasing-rows-vibrant-books_60438-3565.jpg?w=1380&t=st=1700897591~exp=1700898191~hmac=dd3e5a71f1588c5883eadeeb0e9efbfd9b8d337f6e9a087fd74e133bde8574f2)',backgroundRepeat:"no-repeat",backgroundSize:'cover',color:'white'}}>
  <div class="container-fluid">
    <div class="row" >
      <div className="col-sm-4"></div>
      <div class="col-sm-4  text-dark bg-light rounded-4  d-flex flex-column justify-content-center align-items-center" style={{border:'1px',borderColor:'white',marginTop:'20px'}}>

        <div class="w-100 d-flex justify-content-between rounded-3 " style={{padding:'2px'}}>
          <i style={{fontWeight:"300",fontSize:"25px"}}>
   India's Largest
   <br></br> Online Book Store       </i>
   <i style={{fontSize:"70px",marginTop:'10px'}} class="fa-solid fa-book-open-reader fa-2x"></i>

    </div>

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <Form style={{width: '23rem'}}  onSubmit={handleSubmit} >

            <h2 class="fw-bold mb-5 text-dark"  >Log in</h2>

            <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Email address
                      </Form.Label>
                      <Form.Control type="email" name='email' placeholder="Enter email" onChange={(event)=>setFormData({...formData,email: event.target.value})} />
                      {
                        valid ? <></> : <span className='text-danger' style={{fontSize:'13px'}}>{errors.email}</span>

                    }
                    </Form.Group>

                    <Form.Group
                      className="mb-4"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control name='password' type="password" placeholder="Password" onChange={(event)=>setFormData({...formData,password: event.target.value})}/>
                      {
                        valid ? <></> : <span className='text-danger'  style={{fontSize:'13px'}}>{errors.password}</span>

                    }
                    </Form.Group>

            <div class="pt-1 mb-4">
            <Button variant="dark " type="submit" >
                        Login
                      </Button>
            </div>

            <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
            <p style={{fontSize:"14px"}}>New to<span style={{ fontFamily: 'Ephesis',fontWeight:'bold'}}> The Book Shelf </span>?<Link to="/registration" ><span  style={{fontSize:"14px",color:"red"}}>Sign up</span></Link></p>

          </Form>

        </div>

      </div>
    
    </div>
  </div>
</section>
<ToastContainer position='top-center' theme='colored' autoClose={2000} />
  </div>
  )
}

export default Login
