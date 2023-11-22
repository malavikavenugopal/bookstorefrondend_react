
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';



import Header from './components/Header';

import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Registeration from './components/Registeration';
import Listbook from './components/Listbook';
import Viewbook from './components/Viewbook';
import Category from './pages/Category';
import Books from './components/Books';
import Addbook from './components/Addbook';

function App() {
  return (
    <div className="">
      

   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/book' element={<Books/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/registration' element={<Registeration/>}></Route>
        <Route path="/listbook" element={<Listbook/>} />
        <Route path="/books/:id" element={<Viewbook/>} />
        
      </Routes>
      </BrowserRouter>
{/*  <Footer/>  */}
     
    </div>
  );
}

export default App;
