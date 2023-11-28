


import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { addToCart, addToWishlist, getAllBooks } from '../services/allAPI';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import Header from './Header';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Books() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState('');
  //state to add to wishlist
  const [wish,setWish] = useState({})
const [allBook,setAllBook] = useState([])

  const viewAllBook = async ()=>{
    const response = await getAllBooks()
    // console.log(response);
    const{data} = response
    // console.log(data)
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
    toast.warning('Book already exists in the wishlist');
  } else {
      const response = await addToWishlist(details);
      const { data } = response;
      setWish([...wishArray, data]); // Add the new book to the wishlist
  }
};
  // console.log(book);
  const navigate = useNavigate()
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
<div className="d-flex justify-content-center align-items-center">
  <form>
  <input 
  style={{width:"400px",marginTop:'30px'}}
              type="search"
              placeholder="Search Books"
              className="me-2 form-control"
              onChange={(e)=>setSearch(e.target.value)} 
              aria-label="Search"
            />
  </form>
</div>

<div className="row d-flex justify-content-center align-items-center  " style={{minHeight:'600px'}}>
{allBook
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.bname.toLowerCase().includes(search);
              })
              .map((book, index) => (
                <div className="col-md-2  d-flex justify-content-center align-items-center  " style={{ margin: '10px',borderRadius:'10px', borderStyle: 'solid', borderWidth: "0.3px", borderColor: 'grey', width: '13 rem', padding: '10px' }}>
                                    <div  >
                                        <div class=" d-flex justify-content-center align-items-center " >
                                            <img class="d-flex justify-content-center align-items-center " height={180} width={208} src={book?.url} onClick={() => navigate(`/books/${book?.id}`)} />
                                        </div>
                                        <div class="card-text w-100" style={{ margin: '2px' }} >

                                            <h6 style={{ fontSize: '16px' }}>{book?.bname}</h6>
                                            <p style={{ color: 'grey', fontSize: '14px' }}>{book?.author}</p>
                                            <h6>Rs.{book?.amount}</h6>
                                        </div>
                                        {
                                            user &&

                                            <div class=" d-flex justify-content-center align-items-center ">

                                                <button style={{width:"150px",fontSize:'12px'}} className="btn btn-dark" onClick={()=>addCart(book)} >ADD TO CART</button>
                                                <button className="btn " style={{ marginLeft: '20px' }}  onClick={()=>addWishlist(book)} ><i style={{ color: 'red' }} class="fa-regular fa-heart"></i></button>




                                            </div>
}

                                    </div>
                                </div>

              ))}
              </div>

    </div>
  )
}

export default Books