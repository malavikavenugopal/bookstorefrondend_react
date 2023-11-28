import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import { addToCart } from '../services/allAPI';
function Viewbook() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const [book, setBook] = useState({})


  const addCart = async (book) => {
    const details = {
      bname: book.bname,
      amount: book.amount,
      url: book.url,
      author: book.author
    };
    const response = await addToCart(details);
    const { data } = response;

  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://bookstorebackend-react.onrender.com/books/${id}`);
        console.log(response?.data);
        setBook(response.data);
      } catch (error) {
        console.log(error);
        // setError(error);
      } finally {
        // setLoading(false);
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
      <Header />

      <div style={{ margin: '50px' }}>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <img className='w-100'
              src={book?.url}

            />
          </div>

          <div className="col-md-6 d-flex justify-content-center  flex-column" style={{ fontWeight: 'bold' }}>
            <div className='d-flex justify-content-between'>
              <h2 style={{ color: 'black' }}>{book?.bname}</h2>
            </div>

            <hr></hr>
            <p style={{ fontWeight: '400', fontSize: "12px" }} >Home/{book.category}/{book.bname}</p>
            <h6 style={{ fontWeight: '600' }}>{book?.author}</h6>
            <p style={{ fontWeight: '400' }}>
              {book?.description}
            </p>
            <br></br>
            <h6>Language:<span style={{ fontWeight: '300' }}>{book?.lang}</span> </h6>
            <h6>Book Length:<span style={{ fontWeight: '300' }}> {book?.pages} pages</span></h6>
            <br></br>
            {
              user &&
              <button className='btn btn-dark' style={{ width: '150px', fontSize: "12px" }} onClick={() => addCart(book)}>ADD TO  CART</button>

            }
            <h3></h3>




          </div>
        </div>

      </div>
    </div>
  )
}

export default Viewbook