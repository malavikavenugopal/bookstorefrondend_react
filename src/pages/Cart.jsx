import React, { useEffect, useState } from 'react';
import { deleteCart, getCart } from '../services/allAPI';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Checkout from './Checkout';

function Cart({ clickCount }) {
  const [allCart, setAllCart] = useState([]);
  const [quantity, setQuantity] = useState({});

 
  const viewCart = async () => {
    const response = await getCart();
    const { data } = response;


    // Remove duplicate books based on book name
    const uniqueCart = Array.from(new Set(data.map((item) => item.bname)))
      .map((bname) => data.find((item) => item.bname === bname));

    setAllCart(uniqueCart);

    // Calculate and update the quantities
    const newQuantity = {};
    data.forEach((item) => {
      const bookName = item.bname;
      newQuantity[bookName] = newQuantity[bookName] ? newQuantity[bookName] + 1 : 1;
    });
    setQuantity(newQuantity);
  };

 


  
  const dltcart = async (id) => {
    const response = await deleteCart(id);
    console.log(response);
    viewCart(); // Refresh cart after deleting an item
  };

  useEffect(() => {
    viewCart();
  }, []);

  return (
    <div className="row">
    
      <Header />

 
      <section class=" my-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="card border shadow-0">
          <div class="m-4">
            <h4 class="card-title mb-4">Your shopping cart</h4>
          

                {
                  allCart?.length>0 ?
                  allCart.map((item)=>(
                    <div class="row gy-3" style={{margin:'5px'}}>
                    <div class="col-lg-5">
                      <div class="me-lg-5">
                        <div class="d-flex">
                          <img src={item.url} class="border  me-3" width={96} height={120} />
                          <div class="">
                            <a href="#" class="nav-link">{item.bname}</a>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 col-sm-6 col-6 " >
                      <div class=" ">
                     
                      
                        <input id="form1" min="0" name="quantity" value={quantity[item.bname]} 
                          class="form-control form-control-sm" />
        
                       
                      </div>
                      <div class="">
                        <text class="h6">Rs. {item.amount*quantity[item.bname]}</text> <br />
                        <small class="text-muted text-nowrap"> Rs.{item.amount} / per item </small>
                      </div>
                    </div>
                    <div class="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                      <div class="float-md-end">
                     
                      <button onClick={() => dltcart(item.id)} className='btn'><i style={{color:'red'}}class="fas fa-trash "></i></button>
                      </div>
                    </div>
                  </div>
                  )):<>Your cart is empty! </>
                }
          
          </div>

          <div class="border-top pt-4 mx-4 mb-4">
            <p><i class="fas fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks</p>
            <p class="text-muted">
            Safe and Secure Payments.Easy returns.100% Authentic products.
            </p>
          </div>
        </div>    
      </div>
   <Checkout/>
   
    </div>
  </div>
</section>
    </div>
  );
}

export default Cart;