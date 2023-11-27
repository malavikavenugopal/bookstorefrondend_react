import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
//cart length


  const handleLogout = () => {
    // Handle logout logic
    setUser(null);
    localStorage.removeItem('user');
  };


  return (
    <div>


      <Navbar expand="lg" className=" container">

        <Navbar.Brand href="#home">              <h1 style={{ fontFamily: 'Ephesis', fontWeight: 'bold'}}>The Book Shelf</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link href="/" style={{ fontSize: "15px", marginLeft: '15px' }}>HOME</Nav.Link>
           {/*   <Nav.Link href="" style={{ fontSize: "15px", marginLeft: '15px' }}>CATEGORIES</Nav.Link> */}
          
            
            <Nav.Link href="/book" style={{ fontSize: "15px", marginLeft: '15px' }}>BOOKS</Nav.Link> 

            <NavDropdown title="ACCOUNT" style={{ fontSize: "15px", marginLeft: '15px' }} id="basic-nav-dropdown">
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
                    <h5 className='text-center' style={{ fontFamily: 'Ephesis', fontWeight: 'bold' }} >Welcome to The Book Shelf </h5>
                    <p className='text-center' >Take charge of your buying
                      <br></br>  and selling</p>
                  </>}

              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                {
                  user &&
                  <span > <Link to='/addbook' style={{ textDecoration: 'none', color: 'black' }} ><i class="fa-solid fa-book"></i> Start Selling</Link> </span>
                }

              </NavDropdown.Item>
          
              <NavDropdown.Item href="#action/3.3">{
                user &&
               <Link to='/wishlist' style={{textDecoration:"none",color:'black'}}><span> <i class="fa-solid fa-heart"></i> Wishlist</span></Link> 
              }
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">{
                user &&
              <Link to='/cart' style={{textDecoration:"none",color:'black'}}><span> <i class="fa-solid fa-cart-shopping"></i> Cart</span></Link> 
              }
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4" className='d-flex justify-content-center align-items-center'>
                {!user ?
                  // If user is not logged in, show login and registration buttons
                  <>
                    <Link to='/login'><button type="button" className="btn btn-dark ms-3 " ><i class="fa-solid fa-user"></i> Sign in/Join</button></Link>
                  </> :
                  <button type="button" className="btn btn-dark ms-3" onClick={handleLogout} ><i class="fa-solid fa-power-off"></i> Logout</button>
                }
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" style={{ fontSize: "15px", marginLeft: '15px' }}>CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <Navbar expand="lg"  style={{ backgroundColor: 'black' }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/bestseller"  style={{ color: 'white', marginLeft: '15px', fontSize: "12px" ,backgroundColor:'grey',borderRadius:'5px'}}>BEST SELLERS
                </Nav.Link>
                <Nav.Link href="/fiction"  style={{ color: 'white', marginLeft: '15px', fontSize: "12px",backgroundColor:'grey',borderRadius:'5px' }}>FICTION</Nav.Link>
                <Nav.Link href="/award"  style={{ color: 'white', marginLeft: '15px', fontSize: "12px",backgroundColor:'grey',borderRadius:'5px' }}>AWARD WINNERS
                </Nav.Link>
                <Nav.Link href="/anime"  style={{ color: 'white', marginLeft: '15px', fontSize: "12px",backgroundColor:'grey',borderRadius:'5px' }}>ANIME COMICS</Nav.Link>
 

          </Nav>
        </Navbar.Collapse>
       
      {
              user &&
            
              <Navbar.Brand className=' d-flex ms-auto'>
                <Nav.Link href="/wishlist" style={{ color: 'white', marginLeft: '15px', fontSize: "15px" }}>WISHLIST {/* <Badge bg="secondary"> <i style={{ color: 'red' }} class="fa-solid fa-heart"></i>  0</Badge> */}
                </Nav.Link>
                <Nav.Link href="/cart" style={{ color: 'white', marginLeft: '15px', fontSize: "15px" }}><i class="fa-solid fa-cart-shopping"></i>MY CART{/* : {allCheck?.length} item(s) */}</Nav.Link>
              </Navbar.Brand>

              
       
            }
               
      

    </Navbar>
     
       


    

    </div>
  )
}

export default Header