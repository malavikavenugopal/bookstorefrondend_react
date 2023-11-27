import React, { useState } from 'react'
import Header from './Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Form } from 'react-bootstrap';
import { addBooks } from '../services/allAPI';
function Addbook() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [book, setBook] = useState({
    bname: "",
    description: "",
    author: "",
    amount: "",
    category: "",
    lang: "",
    pages: "",
    url: ""
  })

  // for uploading book
  const upload = async () => {
    const { bname, description, author, amount, category, lang, pages, url } = book
    if (!bname || !description || !author || !amount || !category || !lang || !pages || !url) {
      toast.warning('Fill completely')
    }
    else {
      const response = await addBooks(book)
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
       toast.success(`${response.data.bname} successfully added`)
        setBook({
          bname: "",
          description: "",
          author: "",
          amount: "",
          category: "",
          lang: "",
          pages: "",
          url: ""
        })
        handleClose()
      }
      else {
        console.log(response);
    toast.warning('something went wrong')
      }
    }
  }
  return (
    <div>
      <Header />

      <div class="container-fluid px-1 py-5 mx-auto ">
        <div class="row">
          <div className="col-lg-1"></div>

          <div className="col-lg-5 d-flex justify-content-center flex-column">
            <p style={{ fontSize: '13px' }}>Home > Sell Books Online</p>
            <h1 style={{ fontWeight: 'bold' }}>Sell Books Online on <br></br>Book Shelf</h1>
            <br></br>
            <h6>Sell books on The Book Shelf, India's largest bookstore</h6>
          </div>
          <div className="col-lg-6">
            <img height={400} className='w-100' src='https://img.freepik.com/free-vector/flat-hand-drawn-flea-market-concept_23-2148823307.jpg?w=996&t=st=1701068144~exp=1701068744~hmac=9ffd8ea0297ff6aff6aa2c1566c6ed421fbc8fc282a6b33c9a3a01318d719c70' />
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-center align-items-center flex-column" style={{marginTop:"30px"}}>
        <h2 style={{color:'black'}} className='text-center'><span style={{fontWeight:'bold'}}>Why Sell Books Online with</span> <span style={{fontFamily: 'Ephesis',fontSize:'45px',fontWeight:'bold'}}>Book Shelf</span></h2>

        <div className="row d-flex justify-content-center align-items-center">
          
        
          <Card style={{ width: '18rem' }}>
          <i class="fa-solid fa-shield-halved px-2 py-2 fa-2x"></i>
      <Card.Body>
        <Card.Title >
        Trusted by 7,00,000+ sellers</Card.Title>
        <Card.Text  style={{fontSize:"13px"}}>
Many sellers are registered with Book Shelf because they trust Book Shelf.
        </Card.Text>
      
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <i class="fa-solid fa-location-dot px-2 py-2 fa-2x"></i>
      <Card.Body>
        <Card.Title  >      Pan-India Reach</Card.Title>
        <Card.Text  style={{fontSize:"13px"}}>
  
Access to 50 crore+ registered customers across 19000+ pin-codes.
        </Card.Text>
      
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <i class="fa-regular fa-clock px-2 py-2 fa-2x"></i>
      <Card.Body>
        <Card.Title>    10 min Onboarding</Card.Title>
        <Card.Text  style={{fontSize:"13px"}}>
    
Register your brand with a simple three-step process that only requires 10 minutes of your time.
        </Card.Text>
      
      </Card.Body>
    </Card>
          
        </div>
        
        <div className="row d-flex justify-content-center align-items-center">
          
        
          <Card style={{ width: '18rem' }}>
          <i class="fa-solid fa-arrow-trend-up  px-2 py-2 fa-2x"></i>
      <Card.Body>
        <Card.Title>5X Growth in Business</Card.Title>
        <Card.Text  style={{fontSize:"13px"}}>
        
Multiple growth programs, expert tips and new opportunities to grow your business
        </Card.Text>
     
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <i class="fa-solid fa-bolt  px-2 py-2 fa-2x"></i>
      <Card.Body>
        <Card.Title>  Fastest Payment Cycle</Card.Title>
        <Card.Text style={{fontSize:"13px"}}>
      
All payments are made in a period of 7 to 10 days after product dispatch
        </Card.Text>
      
      </Card.Body>
    </Card>
  
          
        </div>
      </div>
<br></br>
      <div className=" d-flex justify-content-center align-items-center flex-column"  >

<h2 className='fw-bold text-dark'><span >How To </span> Sell Books Online</h2>


<div className="row d-flex justify-content-center align-items-center">
<Card style={{ width: '15rem',height:'350px' }}>
    <Card.Img variant="top" src="https://static-assets-web.flixcart.com/fk-sp-static/images/category_page_Step1.svg" />
      <Card.Body className=' d-flex justify-content-center align-items-center flex-column'>
        <Card.Title>      Create Account</Card.Title>
        <Card.Text  style={{fontSize:"13px"}}>
      
Create your account in just 10 mins
        </Card.Text>
      
      </Card.Body>
    </Card>
        
         
    <Card style={{ width: '15rem',height:'350px' }}>
    <Card.Img variant="top" src="https://static-assets-web.flixcart.com/fk-sp-static/images/category_page_Step2.svg" />

      <Card.Body className=' d-flex justify-content-center align-items-center flex-column'>
        <Card.Title  >  List Products</Card.Title>
        <Card.Text  style={{fontSize:"13px"}}>
  
        
Easy and simple listing process that can be done from your desktop and phone
        </Card.Text>
      
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem',height:'350px' }}>
          <Card.Img variant="top" src="https://static-assets-web.flixcart.com/fk-sp-static/images/category_page_Step3.svg" />

      <Card.Body  className=' d-flex justify-content-center align-items-center flex-column'>
        <Card.Title  >
        Manage business from anywhere</Card.Title>
        <Card.Text  style={{fontSize:"13px"}}>
       
Tracker orders, sales and payments with the help of easy to use dashboard
        </Card.Text>
      
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem',height:'350px' }}>
    <Card.Img variant="top" src="https://static-assets-web.flixcart.com/fk-sp-static/images/category_page_Step4.svg" />
      <Card.Body className=' d-flex justify-content-center align-items-center flex-column'>
        <Card.Title>  Recieve Payments</Card.Title>
        <Card.Text  style={{fontSize:"13px"}}>
      
Get payments as fast as 7-10 days from the date of dispatch
        </Card.Text>
      
      </Card.Body>
    </Card>
        </div>
        <br></br>
        <button  onClick={handleShow} style={{backgroundColor:'black',color:"white"}} className='btn btn-lg '>Start Selling</button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Start Selling</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form class="form-card" onsubmit="event.preventDefault()">
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex"> 
                  
                  <Form.Group className="mb-3">
                      <Form.Label>Book Name</Form.Label>
                      <Form.Control onChange={(e) => setBook({ ...book, bname: e.target.value })}
                        type="text"
                        name='bookName'
                        placeholder="Enter Book Name"
                        autoFocus
                      />
                    </Form.Group> 
                        <Form.Group className="mb-3">
              <Form.Label>Author Name</Form.Label>
              <Form.Control onChange={(e)=>setBook({...book,author:e.target.value})}
                type="text"
                name='authorName'
                placeholder="Enter Author Name"
                autoFocus
              />
            </Form.Group>
             <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <select name="category" id="" onChange={(e)=>setBook({...book,category:e.target.value})}>
              <option >Category</option>
                <option value="Best Sellers">Best Sellers</option>
                <option value="Fiction Books">Fiction Books</option>
                <option value="Award Winners">Award Winners</option>
                <option value="Anime Comics">Anime Comics</option>
                </select>
            </Form.Group>
                   </div>
                  <div class="form-group col-sm-6 flex-column d-flex"> 
                  
            <Form.Group
              className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control onChange={(e)=>setBook({...book,description:e.target.value})} as="textarea" rows={3} name='description' placeholder='Enter Book Description' />
            </Form.Group>
                        <Form.Group className="mb-3">
              <Form.Label>Price </Form.Label>
              <Form.Control onChange={(e)=>setBook({...book,amount:e.target.value})}
                type="number"
                name='amount'
                placeholder="Enter Price"
                autoFocus
              />
            </Form.Group>
                  </div>
                </div>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                      <Form.Group className="mb-3">
              <Form.Label>Pages</Form.Label>
              <Form.Control  onChange={(e)=>setBook({...book,pages:e.target.value})}
                type="number"
                name='pages'
                placeholder="Enter Number of pages"
                autoFocus
              />
            </Form.Group>
                      </div>
                  <div class="form-group col-sm-6 flex-column d-flex"> 
                   <Form.Group className="mb-3">
              <Form.Label>Language</Form.Label>
              <Form.Control  onChange={(e)=>setBook({...book,lang:e.target.value})}
                type="text"
                name='language'
                placeholder="Enter language"
                autoFocus
              />
            </Form.Group> 

                   </div>
                </div>
                <div class="row justify-content-between text-left">
                
                </div>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-12 flex-column d-flex">
                     <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control onChange={(e)=>setBook({...book,url:e.target.value})}
                type="url"
                name='imageUrl'
                placeholder="Enter Image URL"
                autoFocus
              />
            </Form.Group>
 </div>
                </div>
                <br></br>
                <div class="row justify-content-end">
                  
                </div>
              </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className='btn'  onClick={upload}  style={{backgroundColor:'black',color:"white"}}  >Submit</button>
        </Modal.Footer>
      </Modal>
      </div>
<br></br>
     


<ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </div>
  )
}

export default Addbook