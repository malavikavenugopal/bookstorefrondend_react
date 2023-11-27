
import Header from './Header'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBooks, addToCart, addToWishlist, getAllBooks } from '../services/allAPI';
function Bestseller() {
  
    const [user, setUser] = useState(null);
    const [book, setBook] = useState({
        bname:"",
        description:"",
        author:"",
        amount:"",
        category:"",
        lang:"",
        pages:"",
        url:""
    })
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
        toast.warning('Book already exists in the wishlist');
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
        <br></br>
        <div className='container-fluid hide'>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <img height={500} className='w-100' src='https://d2g9wbak88g7ch.cloudfront.net/promotionimages/adbanner.jpg'/>
                </div>
                <div className="col-md-9  d-flex justify-content-center align-items-center flex-column">
                    <div className=" d-flex ">
                        <img height={250} src='https://www.bookswagon.com/productimages/mainimages/114/9780593579114.jpg'/>
                        <img src='https://www.bookswagon.com/productimages/mainimages/732/9780063113732.jpg'/>
                        <img src='https://www.bookswagon.com/productimages/mainimages/094/9781401960094.jpg'/>
                        <img src='https://www.bookswagon.com/productimages/mainimages/291/9781524871291.jpg'/>
                        <img src='https://www.bookswagon.com/productimages/mainimages/332/9780738769332.jpg'/>
                        <img src='https://www.bookswagon.com/productimages/mainimages/752/9780738769752.jpg'/>
                        <img src='https://www.bookswagon.com/productimages/mainimages/699/9781912634699.jpg'/>
                       
                    </div>
                    <div className="d-flex">
                        <img height={250} src='https://www.bookswagon.com/productimages/images200/149/9781419739149.jpg'/>
                        <img height={250}  src='https://www.bookswagon.com/productimages/mainimages/340/9780738746340.jpg'/>
                        <img height={250}  src='https://www.bookswagon.com/productimages/images200/514/9781647228514.jpg'/>
                    
                        <img height={250}  src='https://www.bookswagon.com/productimages/mainimages/501/9781401949501.jpg'/>
                        <img height={250}  src='https://www.bookswagon.com/productimages/mainimages/325/9780738769325.jpg'/>
                        <img height={250} src='https://www.bookswagon.com/productimages/images200/471/9781788178471.jpg'/>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        <hr></hr>
        <div className="d-flex justify-content-center flex-column align-items-center">
                <h3 > Best Sellers</h3> 
             
                <hr class="mb-4 mt-0 d-inline-block mx-auto " style={{ width: '190px', backgroundColor: '#7c4dff', height: '2px' }} />
                {/* <Button style={{backgroundColor:'black'}} onClick={handleShow}>
                <i class="fa-solid fa-circle-plus"></i>
              </Button> */}
        </div>
       
                <div className="row d-flex justify-content-center align-items-center ">
    
                        { allBook.length>0?

                        allBook?.filter((items)=>(items.category==="Best Sellers")).map((book) => {
                            return (

                                <div className="col-md-2  d-flex justify-content-center align-items-center  " style={{borderRadius:"10px", margin: '10px', borderStyle: 'solid', borderWidth: "0.3px", borderColor: 'grey', width: '13 rem', padding: '10px' }}>
                                    <div  >
                                        <div class=" d-flex justify-content-center align-items-center " >
                                            <img class="d-flex justify-content-center align-items-center " height={180} width={208} src={book?.url} onClick={() => navigate(`/books/${book?.id}`)} />
                                        </div>
                                        <div class="card-text w-100" style={{ margin: '2px' }} >

                                            <h6 style={{ fontSize: '16px' }}>{book?.bname}</h6>
                                            <p style={{ color: 'grey', fontSize: '14px' }}>{book?.author}</p>
                                            <h6>Rs. {book?.amount}</h6>
                                        </div>
                                        {
                                            user &&

                                            <div class=" d-flex justify-content-center align-items-center ">

                                                <button style={{width:"150px",fontSize:'12px'}} className="btn btn-dark" onClick={()=>addCart(book)} >ADD TO CART</button>
                                                <button className="btn btn-outline-dark " style={{ marginLeft: '20px' }}  onClick={()=>addWishlist(book)} ><i style={{ color: 'red' }} class="fa-regular fa-heart"></i></button>




                                            </div>}

                                    </div>
                                </div>

                            )
                        }):
                        <p>Nothing to display</p>
                        }
                </div>

                <ToastContainer position='top-center' theme='colored' autoClose={2000} />
     
    </div>
   
  )
}

export default Bestseller
