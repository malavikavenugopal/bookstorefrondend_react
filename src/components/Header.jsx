import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import { Badge, NavDropdown } from 'react-bootstrap';


function Header() {
  const [user, setUser] = useState(null); // State to hold user information
  const navigate = useNavigate();

  // Check if the user is already logged in 
  useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
          setUser(JSON.parse(storedUser));
      }
  }, []);

  const handleLogout = () => {
      // Handle logout logic
      setUser(null);
      localStorage.removeItem('user');
  };


  return (
    <div>


    <Navbar expand="lg" className=" container">
     
        <Navbar.Brand href="#home">              <h1 style={{ fontFamily: 'Ephesis', fontWeight: 'bold', marginLeft: '40px' }}>The Book Shelf</h1>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
         
          <Nav.Link href="/" style={{  fontSize: "15px" ,marginLeft: '15px' }}>HOME</Nav.Link>
                <Nav.Link href="/category" style={{  fontSize: "15px", marginLeft: '15px' }}>CATEGORIES</Nav.Link>
                <Nav.Link href="/book" style={{ fontSize: "15px", marginLeft: '15px' }}>BOOKS</Nav.Link>

            <NavDropdown title="ACCOUNT"   style={{  fontSize: "15px", marginLeft: '15px' }} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">

              {user ? (
                              // If user is logged in, show user's first name and logout button
                              <>
                                  <span className="me-5">{user.firstName} {user.lastName}
                                  </span>
                                
                              </>
                          )
                        :
                       <>
                       <h5  className='text-center' style={{ fontFamily: 'Ephesis', fontWeight: 'bold' }} >Welcome to The Book Shelf </h5>
                       <p className='text-center' >Take charge of your buying
                        <br></br>  and selling</p>
                        </>}

              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.2">
                {
                  user&&
                  <span > <Link to='' style={{textDecoration:'none',color:'black'}} ><i class="fa-solid fa-book"></i>Start Selling</Link> </span>
                }
              
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">{
              user&& 
              <span > <i class="fa-solid fa-bag-shopping"></i> Orders</span>
              }
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">{
              user&& 
              <span> <i class="fa-solid fa-heart"></i> Wishlist</span>
              }
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">{
              user&& 
              <span> <i class="fa-solid fa-cart-shopping"></i> Cart</span>
              }
              </NavDropdown.Item>
            
              <NavDropdown.Item href="#action/3.4" className='d-flex justify-content-center align-items-center'>
              {!user ? 
                              // If user is not logged in, show login and registration buttons
                              <>
                                  <Link to='/login'><button type="button" className="btn btn-dark ms-3 " ><i class="fa-solid fa-user"></i> Sign in/Join</button></Link>
                              </> :
                                <button  type="button" className="btn btn-dark ms-3" onClick={handleLogout} ><i class="fa-solid fa-power-off"></i> Logout</button>
                          }
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" style={{ fontSize: "15px", marginLeft: '15px' }}>CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>

    {
      user &&
      <Navbar  style={{backgroundColor:'black'}}>
      <Container>
        <Navbar.Brand className='wishlistcart d-flex ms-auto'>
        <Nav.Link href="#link"  style={{ color: 'white', marginLeft: '15px',fontSize: "15px"}}>WISHLIST <Badge bg="secondary"> <i style={{color:'red'}} class="fa-solid fa-heart"></i>  0</Badge>
</Nav.Link>
              <Nav.Link href="#link" style={{ color: 'white', marginLeft: '15px',fontSize: "15px" }}><i class="fa-solid fa-cart-shopping"></i>MY CART: 0 item(s)</Nav.Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
}
   

     
    {/*   
                <Form className='search w-100' inline style={{ marginLeft: '90px' }}>
                  <InputGroup className='d-flex'>
                    <InputGroup.Text style={{ backgroundColor: 'black', color: 'white' }} id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                    <Form.Control

                      placeholder="Search by title"
                      aria-label="Username"

                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Form>
         */}

    </div>
  )
} 

export default Header