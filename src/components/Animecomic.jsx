
import Header from './Header'
import React, { useEffect } from 'react'

import { useState } from 'react';

import { useNavigate } from 'react-router-dom'

import { addBooks, addToCart, addToWishlist, getAllBooks } from '../services/allAPI';

function Animecomic() {
    const [user, setUser] = useState(null);
 
    // console.log(book);
    const navigate = useNavigate()
    //state to view all books
    const [allBook , setAllBook] = useState([])

    //state to add to wishlist
    const [wish,setWish] = useState({})

    




    //to view all books 
    const viewAllBook = async ()=>{
        const response = await getAllBooks()
        // console.log(response);
        const{data} = response
        // console.log(data);
        setAllBook(data)
    }
    console.log(allBook);

    useEffect(()=>{
        viewAllBook()
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    },[])

    const addWishlist = async (book) => {
        const details = {
          bname: book.bname,
          amount: book.amount,
          url:book.url,
          author:book.author
        };
    
        // Check if wish is an array, if not, initialize it as an empty array
        const wishArray = Array.isArray(wish) ? wish : [];
    
        // Check if the book already exists in the wishlist
        const existingBook = wishArray.find((wishlistItem) => wishlistItem.bname === details.bname);
    
        if (existingBook) {
            alert('Book already exists in the wishlist');
        } else {
            const response = await addToWishlist(details);
            const { data } = response;
            setWish([...wishArray, data]); // Add the new book to the wishlist
        }
    };

    

    const addCart = async (book) => {
      const details = {
        bname: book.bname,
        amount: book.amount,
        url:book.url,
        author:book.author
    };
     
    
        const response = await addToCart(details);
        const { data } = response;
      
    
   
      
    }
    

  return (
    <div>
        <Header/>
        
        <img className='w-100' src='https://cdnmedia.atlanticbooks.com/media/contentImages/home/peacock-banner.jpg'/>
        <br></br>
        <br></br>
        <div className="container-fluid">
                <h3 style={{fontWeight:"bold",fontSize:'30px'}}>Anime Comics</h3> 
                <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '180px', backgroundColor: '#7c4dff', height: '2px' }} />
        </div>
                <div className="row  d-flex justify-content-center align-items-center">
    
                        { allBook.length>0?

                        allBook?.filter((items)=>(items.category==="Anime Comics")).map((book) => {
                            return (

                                <div className="col-md-2   d-flex justify-content-center align-items-center  " style={{ margin: '10px', borderStyle: 'solid', borderWidth: "0.3px", borderColor: 'grey', width: '13 rem', padding: '10px' }}>
                                    <div  >
                                        <div class="" >
                                            <img height={180} width={208} src={book?.url} onClick={() => navigate(`/books/${book?.id}`)} />
                                        </div>
                                        <div class="card-text w-100 d-flex justify-content-between" style={{ margin: '2px' }} >
<div>
<h6 style={{ fontSize: '16px' }}>{book?.bname}</h6>
                                            <p style={{ color: 'grey', fontSize: '14px' }}>{book?.author}</p>
                                            <h6>${book?.amount}</h6>
</div>
                                          

                                            <div>
                                            <button className="btn" style={{ marginLeft: '20px' }}  onClick={()=>addWishlist(book)}><i style={{ color:'red'}} class="fa-regular fa-heart"></i></button>
                                            </div>
                                        </div>
                                        {
                                            user &&

                                            <div class=" d-flex">

                                                <button style={{width:"210px",fontSize:'12px'}} className="btn btn-dark " onClick={()=>addCart(book)} >ADD TO CART</button>
                                               




                                            </div>}

                                    </div>
                                </div>

                            )
                        }):
                        <p>Nothing to display</p>
                        }
               

    </div>
    </div>
  )
}

export default Animecomic