import React, { useEffect, useState } from 'react';
import { deleteCart, getCart } from '../services/allAPI';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Cart({ clickCount }) {
  const [allCart, setAllCart] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [allCheck, setAllCheck] = useState([])
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

  //checkout 
  const viewCheckout = async () => {
    const response1 = await getCart()
    // console.log(response);
    const { data } = response1
    // console.log(data);
    console.log(typeof (amount));
    setAllCheck(data)
  }
  //totalprice
  const totalprice = allCheck.map((item) => parseFloat(item.amount)).reduce((n1, n2) => n1 + n2, 0);


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
      {/*  {allCart.length > 0 ? (
        allCart.map((item) => (
          <div className="col-md-3 mb-3" key={item.id}>
            <div className="card">
              <div className="card-image">
                <img height={200} className="w-100" src={item.url} alt={item.bname} />
              </div>
              <div className="card-text w-100" style={{ margin: '2px' }}>
                <h6>{item.bname}</h6>
                <p style={{ color: 'grey', fontSize: '14px' }}>{item.author}</p>
                <h6>₹ {item.amount}</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center p-4">
                <h6>Quantity:{quantity[item.bname]}</h6>
                <Button className="btn btn-warning" onClick={() => dltcart(item.id)}>
                  <i className="fa-solid fa-trash"></i>
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Nothing to display</p>
      )}
      <div className="text-center mt-5">
        <Button className="btn btn-warning w-25 p-2 rounded">
          <Link to={'/checkout'} style={{ textDecoration: 'none' }}>
            Check Out
          </Link>
        </Button>
      </div> */}
      <Header />
      <section class="h-100" style={{backgroundColor: "#eee;"}}>
          <div class="container h-100 py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-10">
                
              <div class="d-flex justify-content-between align-items-center mb-4">
                  <h3 class="fw-bold mb-0 text-black">Shopping Cart</h3>
             {/*      <div>
                    <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                          class="fas fa-angle-down mt-1"></i></a></p>
                  </div> */}
                </div>
        

      {
        allCart.length>0?

        
        allCart.map((item)=>(
      
        <>
                <div class="card rounded-3 mb-4">
                  <div class="card-body p-4">
                    <div class="row d-flex justify-content-between align-items-center">
        
                    
                      <div class="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src={item.url}
                          class="img-fluid rounded-3"/>
                      </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                <p  style={{fontSize:"15px"}}class="lead fw-normal mb-2">{item.bname}</p>
              </div>
                      <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button class="btn btn-link px-2"
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                          <i class="fas fa-minus"></i>
                        </button>
        
                        <input id="form1" min="0" name="quantity" value={quantity[item.bname]} 
                          class="form-control form-control-sm" />
        
                        <button class="btn btn-link px-2"
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                      <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 style={{fontSize:'15px'}} class="mb-0">Rs. {item.amount*quantity[item.bname]}</h5>
                      </div>
                      <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                        <button onClick={() => dltcart(item.id)} className='btn'><i style={{color:'red'}}class="fas fa-trash "></i></button>
                      </div>
                    </div>
                  </div>
                </div>
        
              
        
                </>   
        
        ))
      :
      <p>Nothing to display</p>
      }
      {
        allCart?.length>0 &&

        <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-dark me-2"><Link style={{textDecoration:'none',color:'white',fontSize:"14px"}} to='/'>Continue shopping</Link></button>
        <button type="button" class="btn btn-success "><Link style={{textDecoration:'none',color:'white',fontSize:"14px"}} to='/checkout'>Checkout</Link></button>
      </div>
       
      }
   
      </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Cart;