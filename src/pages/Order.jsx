
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getCart } from '../services/allAPI';

function Order() {
  const [allCheck, setAllCheck] = useState([])
  const [user, setUser] = useState(null);
  const [total, setTotal] = useState(0)
  const viewCheckout = async () => {
    const response = await getCart()
    // console.log(response);
    const { data } = response
    // console.log(data);
    console.log(typeof (amount));
    setAllCheck(data)
  }
  console.log(allCheck);

  const getTotal = () => {
    const totalprice = allCheck
      .map((item) => parseFloat(item.amount)).reduce((n1, n2) => n1 + n2, 0);
    setTotal(totalprice);
  };

  useEffect(() => {
    viewCheckout()
    getTotal()
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [allCheck])
  const today = new Date
  let timeStamp = new Intl.DateTimeFormat('en-US', {

    year: 'numeric',
    month: '2-digit',
    day: '2-digit',

  }).format(today)
  console.log(timeStamp);


  const handlecart = async () => {
    await axios.get('https://bookstorebackend-react.onrender.com/cart')
      .then(res => {
        const records = res.data;
        const deletePromises = records.map(record =>
          axios.delete(`https://bookstorebackend-react.onrender.com/cart/${record.id}`)
        );

        return Promise.all(deletePromises);
      })
      .then(() => {
        console.log("All data has been deleted");

      })
      .catch(error => {
        console.log("Error deleting data:", error);

      });

  }


  return (
    <>
      <div className='navbar bg-dark'>

      <button  onClick={handlecart} className='btn ' ><Link style={{ color: 'white' ,textDecoration:'none'}} to='/'>      <h3 style={{ fontFamily: 'Ephesis', fontWeight: 'bold'}}>The Book Shelf</h3> </Link></button>
      </div>

      <div class=" d-flex row   justify-content-center">

        <div class=" col-md-6 card card-1">

          <div class="card-header bg-white">
            <div class="media flex-sm-row flex-column-reverse justify-content-between  ">
              <div class="col my-auto"> <h4 class="mb-0">Thanks for your Order !</h4> </div>
              <div class="col-auto text-center  my-auto pl-0 pt-sm-4"> <img class="img-fluid my-auto align-items-center mb-0 pt-3" src="https://img.freepik.com/premium-photo/pile-books_30489-399.jpg?ga=GA1.1.756413985.1699775516&semt=ais_ai_generated" width="115" height="115" /> <p class="mb-4 pt-0 Glasses">Books For Everyone</p>  </div>
            </div>
          </div>
          <div class="card-body">
            <div class="row justify-content-between mb-3">
              <div class="col-auto"> <h6 class="color-1 mb-0 change-color">Receipt</h6> </div>
              <div class="col-auto  "> <small>Receipt Voucher : 1KAU9-84UIL</small> </div>
            </div>
            <div class="row " >


              {
                allCheck &&
                allCheck.map((items) => (
                  <div class="col-lg-12" width={500} >
                    <div class=" card-2">
                      <div class="card-body">
                        <div class="media">
                          <div class="sq align-self-center "> <img class="img-fluid  my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0" src={items.url} width="75" height="75" /> </div>
                          <div class="media-body my-auto text-right">
                            <div class=" d-flex justify-content-between ">
                              <div> <h6 class="mb-0" style={{ fontSize: '14px' }}>{items.bname}</h6>  </div>


                              <div ><h6 class="mb-0">Rs. {items.amount}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      

                      </div>
                    </div>
                  </div>
                ))
              }

            </div>

            <div class="row mt-4">
              <div class="col">
                <div class="row justify-content-between">
                  <div class="col-auto"><p class="mb-1 text-dark"><b>Order Details</b></p></div>
                  <div class="flex-sm-col text-right col"> <p class="mb-1"><b>Total</b></p> </div>
                  <div class="flex-sm-col col-auto"> <p class="mb-1">Rs. {total}</p> </div>
                </div>


                <div class="row justify-content-between">
                  <div class="flex-sm-col text-right col"><p class="mb-1"><b>Delivery Charges</b></p></div>
                  <div class="flex-sm-col col-auto"><p class="mb-1">Free</p></div>
                </div>
              </div>
            </div>
            <div class="row invoice ">
              <div class="col"><p class="mb-1"> Invoice Number : 788152</p><p class="mb-1">Invoice Date :
                {timeStamp}</p><p class="mb-1">Recepits Voucher:18KU-62IIK</p></div>
            </div>
          </div>
          <div class="card-footer bg-dark">
            <div class="jumbotron-fluid">
              <div class="row justify-content-between ">

                <div class="col-auto my-auto "><h2 style={{color:'white'}} class="mb-0 font-weight-bold">TOTAL PAID</h2></div>
                <div class="col-auto my-auto ml-auto"><h1 class="display-3 ">Rs. {total}</h1></div>
              </div>
              <div class="row mb-3 mt-3 mt-md-0">
                <div class="col-auto border-line"> <small class="text-white">PAN:AA02hDW7E</small></div>
                <div class="col-auto border-line"> <small class="text-white">CIN:UMMC20PTC </small></div>
                <div class="col-auto "><small class="text-white">GSTN:268FD07EXX </small> </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default Order;

