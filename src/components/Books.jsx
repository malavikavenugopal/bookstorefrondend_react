import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Header from './Header';

function Books() {
    const [books, setBooks] = useState([])
    const [user, setUser] = useState(null);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
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
        <Header/>
        <div className="row">
        {books?.map((book, index) => (

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
            <button className="btn " style={{ marginLeft: '130px' }}><i style={{ color: 'red' }} class="fa-regular fa-heart"></i></button>



            
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