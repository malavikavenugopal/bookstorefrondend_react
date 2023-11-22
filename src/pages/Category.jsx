import React from 'react'
import Header from '../components/Header'
import Listbook from '../components/Listbook'

function Category() {
    return (
        <div>
            <Header />
            <div>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-3 d-flex flex-column " style={{ justifyContent: 'center' }}>
                        <h1 className=' title ' style={{ fontWeight: 'bold' }}>A selection with <br>
                        </br><span style={{ fontWeight: '400' }}>only the best books</span></h1>
                        <br></br>
                        <button className='btn rounded-1' style={{ backgroundColor: 'yellowgreen', color: 'white', fontSize: '17px', fontWeight: '700', width: '150px' }}>Explore Books</button>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-6 col-sm-12">
                        <img className='w-100 catimg' src='https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/500x380/img1.png' />

                    </div>

                </div>
            </div>
            <section className='container'>
              <Listbook/>
            </section>
        </div>
    )
}

export default Category