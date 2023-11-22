import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

import Addbook from "./Addbook";
import axios from 'axios'

function Listbook() {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState('Best Sellers')
    const [books, setBooks] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const handleClose = () => setShow(false);
    const handleShow = (name) => {
        setCategory(name)
        setShow(true);
      }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/books');
                console.log(response?.data);
                setBooks(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
       
    }, []);


    return (
        <div>


<div className="d-flex">
            <h3> Most Popular Books</h3> 
            <Button style={{backgroundColor:'black'}} onClick={() => handleShow('Best Sellers')}>
            <i class="fa-solid fa-circle-plus"></i>
          </Button>
          </div>
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '180px', backgroundColor: '#7c4dff', height: '2px' }} />
            <div className="row">
                {books.filter((book) => book?.category === 'Best Sellers').map((book, index) => (

                    <div className="col-md-3">
                        <div class="card">
                            <div class="card-image" >
                                <img height={200} className='w-100' src={book?.imageUrl} onClick={() => navigate(`/books/${book?.id}`)} />
                            </div>
                            <div class="card-text w-100" style={{ margin: '2px' }} >

                                <h6 >{book?.bookName}</h6>
                                <p style={{ color: 'grey', fontSize: '14px' }}>{book?.authorName}</p>
                                <h6>${book?.amount}</h6>
                            </div>
                            {
            user&&
            
            <div class="card-stats d-flex">

            <button className="btn btn-dark" style={{ fontSize: '12px' }}>ADD TO CART</button>
            <button className="btn " style={{ marginLeft: '75px' }}><i style={{ color: 'red' }} class="fa-regular fa-heart"></i></button>



            
        </div>}
            
                        </div>
                    </div>


                ))}
            </div>

<div className="d-flex">
<h3>  Fiction</h3>
            <Button   style={{backgroundColor:'black'}}  onClick={() => handleShow('Fiction Books')}>
            <i class="fa-solid fa-circle-plus"></i>
          </Button>
</div>
           
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
            <div className="row">
                {books.filter((book) => book?.category === 'Fiction Books').map((book, index) => (

                    <div className="col-md-3">
                        <div class="card">
                            <div class="card-image" >
                                <img height={200} className='w-100' src={book?.imageUrl} onClick={() => navigate(`/books/${book?.id}`)} />
                            </div>
                            <div class="card-text w-100" style={{ margin: '2px' }} >

                                <h6 >{book?.bookName}</h6>
                                <p style={{ color: 'grey', fontSize: '14px' }}>{book?.authorName}</p>
                                <h6>${book?.amount}</h6>
                            </div>
                            {
            user&&
            
            <div class="card-stats d-flex">

            <button className="btn btn-dark" style={{ fontSize: '12px' }}>ADD TO CART</button>
            <button className="btn " style={{ marginLeft: '75px' }}><i style={{ color: 'red' }} class="fa-regular fa-heart"></i></button>



            
        </div>}
                        </div>
                    </div>


                ))}
            </div>
<div className="d-flex">
<h3>  Award Winners</h3>
<Button  style={{backgroundColor:'black'}}  onClick={() => handleShow('Award Winners')}>
            <i class="fa-solid fa-circle-plus"></i>
          </Button>
</div>
         
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '160px', backgroundColor: '#7c4dff', height: '2px' }} />
            <div className="row">

                <div className="col-md-12 d-flex" style={{ flexWrap: 'wrap' }}>
                    {books.filter((book) => book?.category === 'Award Winners').map((book, index) => (

                        <div className="col-md-3">
                            <div class="card">
                                <div class="card-image" >
                                    <img height={200} className='w-100' src={book?.imageUrl} onClick={() => navigate(`/books/${book?.id}`)} />
                                </div>
                                <div class="card-text w-100" style={{ margin: '2px' }} >

                                    <h6 >{book?.bookName}</h6>
                                    <p style={{ color: 'grey', fontSize: '14px' }}>{book?.authorName}</p>
                                    <h6>${book?.amount}</h6>
                                </div>
                                {
            user&&
            
            <div class="card-stats d-flex">

            <button className="btn btn-dark" style={{ fontSize: '12px' }}>ADD TO CART</button>
            <button className="btn " style={{ marginLeft: '75px' }}><i style={{ color: 'red' }} class="fa-regular fa-heart"></i></button>



            
        </div>}
                            </div>
                        </div>


                    ))}
                </div>

            </div>
            <div className="d-flex">
            <h3> Anime Comics</h3>
            <Button   style={{backgroundColor:'black'}}  onClick={() => handleShow('Anime Comics')}>
            <i class="fa-solid fa-circle-plus"></i>
          </Button>
            </div>
           
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '160px', backgroundColor: '#7c4dff', height: '2px' }} />
            <div className="row">

                <div className="col-md-12 d-flex" style={{ flexWrap: 'wrap' }}>
                    {books.filter((book) => book?.category === 'Anime Comics').map((book, index) => (

                        <div className="col-md-3">
                            <div class="card">
                                <div class="card-image" >
                                    <img height={200} className='w-100' src={book?.imageUrl} onClick={() => navigate(`/books/${book?.id}`)} />
                                </div>
                                <div class="card-text w-100" style={{ margin: '2px' }} >

                                    <h6 >{book?.bookName}</h6>
                                    <p style={{ color: 'grey', fontSize: '14px' }}>{book?.authorName}</p>
                                    <h6>${book?.amount}</h6>
                                </div>
                                {
            user&&
            
            <div class="card-stats d-flex">

            <button className="btn btn-dark" style={{ fontSize: '12px' }}>ADD TO CART</button>
            <button className="btn " style={{ marginLeft: '75px' }}><i style={{ color: 'red' }} class="fa-regular fa-heart"></i></button>



            
        </div>}
                            </div>
                        </div>


                    ))}
                </div>

            </div>

            <Addbook show={show} handleClose={handleClose} category={category} setBooks={setBooks} books={books} />
        </div>
    );
}

export default Listbook;