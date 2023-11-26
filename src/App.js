
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';




import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Registeration from './components/Registeration';

import Viewbook from './components/Viewbook';

import Books from './components/Books';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';

import Order from './pages/Order';
import Bestseller from './components/Bestseller';
import Fiction from './components/Fiction';
import Awardwinners from './components/Awardwinners';
import Animecomic from './components/Animecomic';
import Addbook from './components/Addbook';



function App() {
  return (
    <div className="">
      

   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/book' element={<Books/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/bestseller' element={<Bestseller/>}></Route>
        <Route path='/fiction' element={<Fiction/>}></Route>
        <Route path='/award' element={<Awardwinners/>}></Route>
        <Route path='/anime' element={<Animecomic/>}></Route>
      


        <Route path='/registration' element={<Registeration/>}></Route>
       <Route path='/addbook' element={<Addbook/>}></Route>
        <Route path="/books/:id" element={<Viewbook/>} />
        <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/order' element={<Order/>}/>

    
        
      </Routes>
      </BrowserRouter>
  <Footer/>  
     
    </div>
  );
}

export default App;
