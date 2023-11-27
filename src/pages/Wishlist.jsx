import React, { useEffect, useState } from 'react'
import { addToCart, deletewishlist, getwishlist } from '../services/allAPI'

import Header from '../components/Header'

function Wishlist() {
    const [allWish, setAllWish] = useState({})
  
    const [cart, setCart] = useState({})
    const viewWishlist = async () => {
        const response = await getwishlist()
        // console.log(response);
        const { data } = response
        // console.log(data);
        setAllWish(data)
        const uniqueWishlist = Array.from(new Set(data.map((item) => item.bname)))
        .map((bname) => data.find((item) => item.bname === bname));
  
      
          setAllWish(uniqueWishlist)



    }
    console.log(allWish);
    // console.log(book); 

        const deletewish = async (id) => {
        const response = await deletewishlist(id)
        console.log(response);

    }

    //add to cart
    const addCart = async (book) => {
        const details = {
            bname: book.bname,
            amount: book.amount,
            url: book.url,
            author: book.author
        };


        const response = await addToCart(details);
        const { data } = response;
        setCart(data);

        //to delete the products
        const response2 = await deletewishlist(book.id)
        console.log(response2);
    };

    useEffect(() => {
        viewWishlist()
        deletewish()
      
    }, [deletewish])
    return (
        <>
            <Header />

    

            <div className="row d-flex justify-content-center align-items-center " style={{marginTop:'20px'}} >
              <br></br>





             {allWish?.length > 0 &&
                  <h3  class="fw-bold mb-0 text-black text-center">Wishlist</h3>
             }
          
                
                {allWish?.length > 0 ?
  
                    allWish?.map((book) => (
<>
                      

                        <div className="col-md-2  d-flex justify-content-center align-items-center  " style={{ margin: '10px', borderStyle: 'solid', borderWidth: "0.3px", borderColor: 'grey', width: '13 rem', padding: '10px' }}>
                            
                            
                            <div>
                                <div class="  d-flex justify-content-center align-items-center" >
                                    <img height={180} width={208} src={book?.url} /* onClick={() => navigate(`/books/${book?.id}`)} */ />
                                </div>
                                <div class="card-text w-100" style={{ margin: '2px' }} >

                                    <h6 style={{ fontSize: '16px' }}>{book?.bname}</h6>
                                    <p style={{ color: 'grey', fontSize: '14px' }}>{book?.author}</p>
                                    <h6>Rs. {book?.amount}</h6>
                                </div>
                            

                                    <div class="   d-flex justify-content-center align-items-center">

                                        <button style={{ width: "150px", fontSize: '12px' }} className="btn btn-dark" onClick={() => addCart(book)} >ADD TO CART</button>
                                        <button className="btn  " style={{ marginLeft: '20px' }} onClick={() => deletewish(book?.id)} ><i style={{color:'red'}} class="fa-solid fa-trash"></i></button>




                                    </div>
                                           

                                </div>
                        </div>

                        </>
            )) :
          <div className="d-flex justify-content-center align-items-center vh-100">
<h2 className='text-dark'>Your Wishlist is empty!</h2>
          </div>
                }
        </div >
       
        </>

    )
}

export default Wishlist