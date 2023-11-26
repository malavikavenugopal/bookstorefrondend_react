import React,{useState} from 'react'
import Header from './Header'


import { Form } from 'react-bootstrap';
import { addBooks } from '../services/allAPI';
function Addbook() {
  const [book, setBook] = useState({
    bname: "",
    description: "",
    author: "",
    amount: "",
    category: "",
    lang: "",
    pages: "",
    url: ""
  })
  
 // for uploading book
 const upload = async ()=>
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
        setBook({
          bname: "",
          description: "",
          author: "",
          amount: "",
          category: "",
          lang: "",
          pages: "",
          url: ""
        })
        }
        else{
         console.log(response);
         alert('something went wrong')
        }
     }
 }
  return (
    <div>
      <Header />

      <div class="container-fluid px-1 py-5 mx-auto" style={{background:'url(https://img.freepik.com/free-photo/display-vintage-books-within-library-meticulously-organized-with-classic-rare-volumes_157027-2362.jpg?t=st=1701007156~exp=1701010756~hmac=ae1fd99ca0f62a1992e4c391119c635328bcd79956beb1821fb0b37adae43a70&w=1060)',backgroundRepeat:'no-repeat',backgroundSize:"cover"}}>
        <div class="row d-flex justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center" style={{ padding: '20px' }}>
           
            <div class="card" style={{ padding: '20px' }}>
              <h5 class="text-center mb-4">Sell a Book</h5>
              <form class="form-card" onsubmit="event.preventDefault()">
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex"> 
                  
                  <Form.Group className="mb-3">
                      <Form.Label>Book Name</Form.Label>
                      <Form.Control onChange={(e) => setBook({ ...book, bname: e.target.value })}
                        type="text"
                        name='bookName'
                        placeholder="Enter Book Name"
                        autoFocus
                      />
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
              <Form.Label>Category</Form.Label>
              <select name="category" id="" onChange={(e)=>setBook({...book,category:e.target.value})}>
              <option >Category</option>
                <option value="Best Sellers">Best Sellers</option>
                <option value="Fiction Books">Fiction Books</option>
                <option value="Award Winners">Award Winners</option>
                <option value="Anime Comics">Anime Comics</option>
                </select>
            </Form.Group>
                   </div>
                  <div class="form-group col-sm-6 flex-column d-flex"> 
                  
            <Form.Group
              className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control onChange={(e)=>setBook({...book,description:e.target.value})} as="textarea" rows={3} name='description' placeholder='Enter Book Description' />
            </Form.Group>
                        <Form.Group className="mb-3">
              <Form.Label>Price </Form.Label>
              <Form.Control onChange={(e)=>setBook({...book,amount:e.target.value})}
                type="number"
                name='amount'
                placeholder="Enter Price"
                autoFocus
              />
            </Form.Group>
                  </div>
                </div>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                      <Form.Group className="mb-3">
              <Form.Label>Pages</Form.Label>
              <Form.Control  onChange={(e)=>setBook({...book,pages:e.target.value})}
                type="number"
                name='pages'
                placeholder="Enter Number of pages"
                autoFocus
              />
            </Form.Group>
                      </div>
                  <div class="form-group col-sm-6 flex-column d-flex"> 
                   <Form.Group className="mb-3">
              <Form.Label>Language</Form.Label>
              <Form.Control  onChange={(e)=>setBook({...book,lang:e.target.value})}
                type="text"
                name='language'
                placeholder="Enter language"
                autoFocus
              />
            </Form.Group> 

                   </div>
                </div>
                <div class="row justify-content-between text-left">
                
                </div>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-12 flex-column d-flex">
                     <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control onChange={(e)=>setBook({...book,url:e.target.value})}
                type="url"
                name='imageUrl'
                placeholder="Enter Image URL"
                autoFocus
              />
            </Form.Group>
 </div>
                </div>
                <br></br>
                <div class="row justify-content-end">
                  <div class="form-group col-sm-6"> <button type="submit" class="btn btn-block btn-dark"  onClick={upload} >Submit</button> </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addbook