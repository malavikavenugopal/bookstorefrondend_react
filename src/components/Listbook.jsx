import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { addBooks, addToCart, addToWishlist, getAllBooks } from '../services/allAPI';

function Listbook() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    //state to view all books
    const [allBook , setAllBook] = useState([])

    //state to add to wishlist
    const [wish,setWish] = useState({})

    


    // for uploading book
    const upload= async ()=>
    {
        const {bname,description,author,amount,category,lang,pages,url} = book
        if(!bname || !description || !author || !amount || !category || !lang || !pages || !url)
        {
            alert('Fill completely')
        }
        else
        {
           const response = await addBooks(book)
           console.log(response);
           if(response.status>=200 && response.status<300)
           {
            alert(`${response.data.bname} successful`)
            handleClose()
           }
           else{
            console.log(response);
            alert('something went wrong')
           }
        }
    }

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
    },[])

    const addWishlist = async (book) => {
        const details = {
            bname: book.bookName,
            amount: book.amount,
            url:book.imageUrl,
            author:book.authorName
        };



    
        const response = await addToWishlist(details);
        const { data } = response;
        setWish(data);
    };

    const addCart = async (book) => {
      const details = {
        bname: book.bookName,
        amount: book.amount,
        url:book.imageUrl,
        author:book.authorName
    };
     
    
        const response = await addToCart(details);
        const { data } = response;
      
    
   
      
    }
    


  return (
    <div>
        <div className="d-flex">
                <h3> Most Popular Books</h3> 
                <Button style={{backgroundColor:'black'}} onClick={handleShow}>
                <i class="fa-solid fa-circle-plus"></i>
              </Button>
        </div>
        <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '180px', backgroundColor: '#7c4dff', height: '2px' }} />
                <div className="row">
    
                        { allBook.length>0?

                        allBook?.map((item)=>(
                            <div className="col-md-3 mb-3">
                            <div class="card">
                                <div class="card-image" >
                                    <img height={200} className='w-100' src={item.imageUrl} />
                                </div>
                                <div class="card-text w-100" style={{ margin: '2px' }} >
    
                                    <h6 >{item.bookName}</h6>
                                    <p style={{ color: 'grey', fontSize: '14px' }}>{item.authorName}</p>
                                    <h6>₹ {item.amount}</h6>
                                </div>

                                <div className='d-flex justify-content-between align-items-center p-4'>
                                    <Button className='btn btn-warning' onClick={()=>addCart(item)}>Add to Cart</Button>
                                    <Button className='btn btn-warning' onClick={()=>addWishlist(item)}><i class="fa-regular fa-heart"></i></Button>
                                </div>
                            </div>
                            </div>    
                        )):
                        <p>Nothing to display</p>
                        }
                </div>

                {/* modal for adding books in category */}

                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Book Name</Form.Label>
              <Form.Control onChange={(e)=>setBook({...book,bname:e.target.value})}
                type="text"
                name='bookName'
                placeholder="Enter Book Name"
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3">
              <Form.Label>Book Description</Form.Label>
              <Form.Control onChange={(e)=>setBook({...book,description:e.target.value})} as="textarea" rows={3} name='description' placeholder='Enter Book Description' />
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
              <Form.Label>Amount</Form.Label>
              <Form.Control onChange={(e)=>setBook({...book,amount:e.target.value})}
                type="number"
                name='amount'
                placeholder="Enter Amount"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <select name="category" id="" onChange={(e)=>setBook({...book,category:e.target.value})}>
                <option value="Best Sellers">Best Sellers</option>
                <option value="Fiction Books">Fiction Books</option>
                <option value="Award Winners">Award Winners</option>
                <option value="Anime Comics">Anime Comics</option>
                </select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Language</Form.Label>
              <Form.Control  onChange={(e)=>setBook({...book,lang:e.target.value})}
                type="text"
                name='language'
                placeholder="Enter language"
                autoFocus
              />
            </Form.Group> 

            <Form.Group className="mb-3">
              <Form.Label>Pages</Form.Label>
              <Form.Control  onChange={(e)=>setBook({...book,pages:e.target.value})}
                type="number"
                name='pages'
                placeholder="Enter number of pages"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control onChange={(e)=>setBook({...book,url:e.target.value})}
                type="url"
                name='imageUrl'
                placeholder="Enter Image URL"
                autoFocus
              />
            </Form.Group>

            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={upload}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Listbook