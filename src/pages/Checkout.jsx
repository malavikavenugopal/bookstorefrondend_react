/* import React, { useEffect, useState } from 'react'
import { addToOrder, getCart } from '../services/allAPI'
import { Button } from 'react-bootstrap'
import { Await, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Order from './Order';

function Checkout() {

  const [allCheck,setAllCheck] = useState([])
  
  const [total,setTotal] = useState(0)

  const viewCheckout = async ()=>{
      const response = await getCart()
      // console.log(response);
      const{data} = response
      // console.log(data);
      console.log(typeof(amount));
      setAllCheck(data)
  }
  console.log(allCheck);

  const getTotal = () => {
    const totalprice = allCheck
      .map((item) => parseFloat(item.amount)).reduce((n1, n2) => n1 + n2, 0);
    setTotal(totalprice);
  };
  const totalprice = allCheck
  .map((item) => parseFloat(item.amount)).reduce((n1, n2) => n1 + n2, 0);
  var totalamount = totalprice
  useEffect(()=>{
    viewCheckout()
    getTotal()
  },[allCheck])


  //payment
const navigate = useNavigate()
const initializeRazorpay = async () =>{
  
  const response = await addToOrder(allCheck)
  
  var options = {
    key: "rzp_test_rgEmrPWXU1ap95",
    key_secret:"QRyIBzWXRDMg2DJWKWJ0Xbp",
    amount: Math.round(total * 100), 
    currency:"INR",
    name:"The Boo kShelf",
    description:"for testing purpose",
    handler: function(response){
  
    },
    prefill: {
      name:"Batch 5",
      email:"batch5@gmail.com",
      contact:"7306027182"
    },
    notes:{
      address:"Razorpay Corporate office"
    },
    theme: {
      color:"#3399cc"
    }
  };
  var pay = new window.Razorpay(options);
  pay.open();
  setOrder(true)
  
}
  return (
    <>
    <Header/>
   
{
  !order?
  <div class="py-3 py-md-4 checkout">
  <div class="container">
      <h4>Checkout</h4>
      <hr/>

      <div class="row">
          <div class="col-md-12 mb-4">
              <div class="shadow bg-white p-3">
                  <h4 class="text-dark">
                  {allCheck.length>0?<>



                      Item Total Amount :
                      <span class="float-end">Rs. {total}</span>
                      <br></br>
                      <br></br>
                 <p style={{fontSize:'13px'}}>Total no of items:{allCheck.length}</p>     
                      </>:

                      <p>Nothing to display</p>}
                  </h4>
                  <hr/>
                  <small>* Items will be delivered in 3 - 5 days.</small>
                  <br/>
                  <small>* Tax and other charges are included ?</small>
              </div>
          </div>
          <div class="col-md-12">
              <div class="shadow bg-white p-3">
                  <h4 class="text-dark">
                      Basic Information
                  </h4>
                  <hr/>

                  <form action="" method="POST">
                      <div class="row">
                          <div class="col-md-6 mb-3">
                              <label>Full Name</label>
                              <input type="text" name="fullname" class="form-control" placeholder="Enter Full Name" />
                          </div>
                          <div class="col-md-6 mb-3">
                              <label>Phone Number</label>
                              <input type="number" name="phone" class="form-control" placeholder="Enter Phone Number" />
                          </div>
                          <div class="col-md-6 mb-3">
                              <label>Email Address</label>
                              <input type="email" name="email" class="form-control" placeholder="Enter Email Address" />
                          </div>
                          <div class="col-md-6 mb-3">
                              <label>Pin-code (Zip-code)</label>
                              <input type="number" name="pincode" class="form-control" placeholder="Enter Pin-code" />
                          </div>
                          <div class="col-md-12 mb-3">
                              <label>Full Address</label>
                              <textarea name="address" class="form-control" rows="2"></textarea>
                          </div>
                          <div class="col-md-12 mb-3">
                          
                                                         <Button onClick={initializeRazorpay} className='btn btn-dark '>Pay Now (Online Payment)</Button>
                                          
                          </div>
                      </div>
                  </form>

              </div>
          </div>

      </div>
  </div>
</div> :
  <Order total={totalamount}/>  
}
  
   
    </>
  )
  }

export default Checkout */
import React, { useEffect, useState } from 'react'
import { getCart } from '../services/allAPI'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function Checkout() {

  const [allCheck,setAllCheck] = useState([])

  const [total,setTotal] = useState(0)

  const viewCheckout = async ()=>{
      const response = await getCart()
      // console.log(response);
      const{data} = response
      // console.log(data);
      console.log(typeof(amount));
      setAllCheck(data)
  }
  console.log(allCheck);

  const getTotal = () => {
    const totalprice = allCheck
      .map((item) => parseFloat(item.amount)).reduce((n1, n2) => n1 + n2, 0);
    setTotal(totalprice);
  };
  
  useEffect(()=>{
    viewCheckout()
    getTotal()
  },[allCheck])


  //payment
const navigate = useNavigate()
const initializeRazorpay = ()=>{
  
  
  var options = {
    key: "rzp_test_rgEmrPWXU1ap95",
    key_secret:"QRyIBzWXRDMg2DJWKWJ0Xbp",
    amount: Math.round(total * 100), 
    currency:"INR",
    name:"The Book Shelf",
    description:"for testing purpose",
    handler: function(response){
      navigate('/order')
  
    },
    prefill: {
      name:"Batch 5",
      email:"batch5@gmail.com",
      contact:"7306027182"
    },
    notes:{
      address:"Razorpay Corporate office"
    },
    theme: {
      color:"#3399cc"
    }
  };
  var pay = new window.Razorpay(options);
  pay.open();

}
  return (
    <>
    {
      
      allCheck?.length>0 ?

      <div class="py-3 py-md-4 checkout">
      <div class="container">
          <h4>Checkout</h4>
          <hr/>
    
          <div class="row">
              <div class="col-md-12 mb-4">
                  <div class="shadow bg-white p-3">
                      <h4 class="text-dark">
                      {allCheck.length>0?<>
    
    
    
                          Item Total Amount :
                          <span class="float-end">Rs. {total}</span>
                          <br></br>
                          <br></br>
                     <p style={{fontSize:'13px'}}>Total no of items:{allCheck.length}</p>     
                          </>:
    
                          <p>Nothing to display</p>}
                      </h4>
                      
                      
                  </div>
              </div>
              <div class="col-md-12">
                  <div class="shadow bg-white p-3">
                      <h4 class="text-dark">
                          Basic Information
                      </h4>
                      <hr/>
    
                      <form action="" method="POST">
                          <div class="row">
                              <div class="col-md-6 mb-3">
                                  <label style={{fontSize:'13px'}}>Full Name</label>
                                  <input type="text" name="fullname" class="form-control" placeholder="Enter Full Name" />
                              </div>
                              <div class="col-md-6 mb-3">
                                  <label style={{fontSize:'13px'}} >Phone Number</label>
                                  <input type="number" name="phone" class="form-control" placeholder="Enter Phone Number" />
                              </div>
                              <div class="col-md-6 mb-3">
                                  <label style={{fontSize:'13px'}}>Email Address</label>
                                  <input type="email" name="email" class="form-control" placeholder="Enter Email Address" />
                              </div>
                              <div class="col-md-6 mb-3">
                                  <label style={{fontSize:'13px'}}>Pin-code (Zip-code)</label>
                                  <input type="number" name="pincode" class="form-control" placeholder="Enter Pin-code" />
                              </div>
                              <div class="col-md-12 mb-3">
                                  <label style={{fontSize:'13px'}}>Full Address</label>
                                  <textarea name="address" class="form-control" rows="2"></textarea>
                              </div>
                              <div class="col-md-12 mb-3">
                              
                                                             <Button onClick={initializeRazorpay} style={{fontSize:'13px'}} className='btn btn-dark '>Pay Now (Online Payment)</Button>
                                              
                              </div>
                          </div>
                      </form>
    
                  </div>
              </div>
    
          </div>
      </div>
    </div> :<></>
    }
   
    
    </>
  )
  }

export default Checkout