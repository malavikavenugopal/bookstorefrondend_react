import React, { useState, useEffect } from 'react'

import Header from './Header'


import axios from 'axios'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';


function Home() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    const fetchData = async () => {

      const response = await axios.get('https://bookstorebackend-react.onrender.com/books');
      console.log(response?.data);
      setBooks(response.data);

    };

    fetchData();


  }, []);


  return (
    <div>
      <Header />

      <div className='d-flex justify-content-center flex-column align-items-center'>
        <h3 style={{ fontFamily: 'Montserrat' }}>SPECIALLY CURATED BOOKS ,JUST FOR YOU</h3>
        <h5 style={{ fontWeight: '400' }}>Best-Selling books are on sale.<span style={{ color: 'red' }}>Update hourly</span></h5>
        <img className='w-100' height={400} src='https://www.bookswagon.com/bannerimages/86_inr.jpg?v=2.5' alt='homeimg' />
      </div>


      <div>
        <br></br>
        <hr></hr>
        <div class="py-3 py-md-5 ">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h4 class="mb-4">Our Categories</h4>
              </div>
              <div class="col-6 col-md-3">
                <div class="category-card">
                  <a href="">
                    <div class="category-card-img">
                      <img height={400} src="https://cms.buybooksindia.com/uploads/books/9780008123208_0_1607508879.jpeg" class="w-100" />
                    </div>
                    <div class="category-card-body">
                      <h5 ><Link   style={{ textDecoration: 'none', color: "black" }} to='/bestseller'>Best Seller</Link></h5>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="category-card">
                  <a href="">
                    <div class="category-card-img">
                      <img height={400} src="https://buybooksindia.s3.amazonaws.com/2023/product/9789389136975-1698834858.jpg" class="w-100" alt="Mobile Devices" />
                    </div>
                    <div class="category-card-body">
                      <h5><Link  style={{ textDecoration: 'none', color: "black" }} to='/fiction'>Classic Fiction Books</Link></h5>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="category-card">
                  <a href="">
                    <div class="category-card-img ">
                      <img height={400} src="https://buybooksindia.s3.amazonaws.com/2023/products/9789383562107-1696577194.jpg" class="w-100" alt="Mens Fashion" />
                    </div>
                    <div class="category-card-body">
                      <h5 ><Link  style={{ textDecoration: 'none', color: "black" }} to='/award'>Award Winners</Link></h5>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="category-card">
                  <a href="">
                    <div class="category-card-img">
                      <img height={400} src="https://buybooksindia.s3.amazonaws.com/2023/products/9781406251999-1695209781.jpg" class="w-100" alt="Women Fashion" />
                    </div>
                    <div class="category-card-body">
                      <h5><Link   style={{ textDecoration: 'none', color: "black" }} to='/anime'>Anime Comics</Link></h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        




      </div>
      <hr></hr>
      <div id="carouselExample" class="carousel slide " style={{ margin: "20px" }}>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img height={500} src="https://d2g9wbak88g7ch.cloudfront.net/promotionimages/mangapromo2.jpg" class="d-block w-100" alt="..." />

            <h3 style={{ color: "black", textAlign: "center", fontWeight: "400" }}>Big Discount on selected Product</h3>


          </div>
          <div class="carousel-item">
            <img height={500} src="https://d2g9wbak88g7ch.cloudfront.net/promotionimages/businesseco2.jpg" class="d-block w-100" alt="..." />
            <h3 style={{ color: "black", textAlign: "center", fontWeight: "400" }}>Exam Central</h3>


          </div>
          <div class="carousel-item">
            <img height={500} src="https://www.bookswagon.com/images/promotionimages/web/tarotcardWeb.jpg?v=2.0" class="d-block w-100" alt="..." />


            <h3 style={{ color: "black", textAlign: "center", fontWeight: "400" }}>Best Tarot Card Decks</h3>

          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <hr></hr>
      <br></br>
      <div className="row  d-flex  justify-content-center  align-items-center" style={{ margin: '20px' }}>

        <div className="col-lg-6">
          <h3><i>Fiction Books</i></h3>
          <img className="w-100" src='https://www.bookswagon.com/images/promotionimages/web/nonfictionbooksWeb.jpg?v=2.0' />
        </div>
        <div className="col-lg-6 ">
          <h3><i>Manga Mania Best Seller</i></h3>
          <img className="w-100" src='https://www.bookswagon.com/images/promotionimages/web/4_mangamaniaWeb.jpg?v=2.0' />
        </div>
      </div>
      <hr></hr>
        <div className="container hide ">
          <div className="d-flex justify-content-between  ">

            <h3 style={{ fontWeight: '700', color: "red" }}><i>New Arrivals</i></h3>
            <Link style={{ color: "black" }} to='/book'>See More</Link>
          </div>
          <div className='d-flex justify-content-center '>
            <img width={200} style={{ padding: '10px' }} src='https://www.bookswagon.com/productimages/images200/295/9780997472295.jpg' />
            <img width={200} style={{ padding: '10px' }} src='https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/756/9780738758756.jpg' />
            <img width={200} style={{ padding: '10px' }} src='https://www.bookswagon.com/productimages/images200/276/9781590035276.jpg' />
            <img width={200} style={{ padding: '10px' }} src='https://www.bookswagon.com/productimages/images200/514/9781647228514.jpg' />
            <img width={200} style={{ padding: '10px' }} src='https://www.bookswagon.com/productimages/images200/323/9781578634323.jpg' />
            <img width={200} style={{ padding: '10px' }} src='https://www.bookswagon.com/productimages/images200/760/9780738759760.jpg' />
          </div>
        </div>
    </div>

  )
}

export default Home