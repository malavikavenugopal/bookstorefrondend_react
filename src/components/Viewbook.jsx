import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
function Viewbook() {
  const [user, setUser] = useState(null);
  const {id} = useParams();
  const [book, setBook] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/books/${id}`);
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
        <Header/>
<br></br><br></br>
       <div className="container">

        <div className="row">
            <div className="col-md-4">
            <img className='w-100'
          src={book?.imageUrl}
          alt={book?.bookName}
        />
            </div>

            <div className="col-md-8 d-flex justify-content-center  flex-column" style={{fontWeight:'bold'}}>
<h2>{book?.bookName}</h2>
<h6 style={{fontWeight:'200'}}>{book?.authorName}</h6>
<p style={{fontWeight:'400'}}>
{book?.description}
</p>
<br></br>
<h6>Language: {book?.language}</h6>
<h6>Book Length: {book?.pages} pages</h6>
{
  user&&
<button className='btn btn-dark' style={{width:'150px',fontSize:"12px"}}>ADD TO  CART</button>

}
<h3></h3>
            </div>
        </div>
       </div>
       {/*  <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={book?.imageUrl}
          alt={book?.bookName}
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <h3>{book?.bookName}</h3>
          <p>{book?.authorName}</p>
          <p>{book?.description}</p>
          <br />

          <p>
            Language : {book?.language}
          </p>
          <p>
            Book Length : {book?.pages} pages
          </p>
          <Button>Add to Cart</Button>

        </div>
      </div>
    </div>
     */}
     </div>
  )
}

export default Viewbook