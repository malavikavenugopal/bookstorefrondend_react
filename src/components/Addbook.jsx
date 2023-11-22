import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

function Addbook({show , handleClose , category, setBooks, books}) {
    const [bookDetails, setBookDetails] = useState({})
    const saveBook = async () => {
        console.log(bookDetails);
        
        try {
            const dataToSave = {...bookDetails,category}
          const response = await axios.post('http://localhost:5000/books',dataToSave);
          console.log(response?.data);
          setBooks([...books,dataToSave])
        } catch (error) {
          /* setError(error); */
          console.log(error);
        } finally {
          /* setLoading(false); */
        }
        handleClose()
      };

  return (
    <div>
        {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
        </Button> */}

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Book Name</Form.Label>
              <Form.Control onChange={(e)=>setBookDetails({...bookDetails,[e.target.name]:e.target.value})}
                type="text"
                name='bookName'
                placeholder="Enter Book Name"
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Book Description</Form.Label>
              <Form.Control as="textarea" rows={3} name='description' placeholder='Enter Book Description' onChange={(e)=>setBookDetails({...bookDetails,[e.target.name]:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Author Name</Form.Label>
              <Form.Control  onChange={(e)=>setBookDetails({...bookDetails,[e.target.name]:e.target.value})}
                type="text"
                name='authorName'
                placeholder="Enter Author Name"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Amount</Form.Label>
              <Form.Control  onChange={(e)=>setBookDetails({...bookDetails,[e.target.name]:e.target.value})}
                type="number"
                name='amount'
                placeholder="Enter Amount"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <select name="category" id="" disabled value={category}>
                <option value="Best Sellers">Best Sellers</option>
                <option value="Fiction Books">Fiction Books</option>
                <option value="Award Winners">Award Winners</option>
                <option value="Anime Comics">Anime Comics</option>
                </select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Language</Form.Label>
              <Form.Control  onChange={(e)=>setBookDetails({...bookDetails,[e.target.name]:e.target.value})}
                type="text"
                name='language'
                placeholder="Enter language"
                autoFocus
              />
            </Form.Group> 

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Pages</Form.Label>
              <Form.Control  onChange={(e)=>setBookDetails({...bookDetails,[e.target.name]:e.target.value})}
                type="number"
                name='pages'
                placeholder="Enter number of pages"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control  onChange={(e)=>setBookDetails({...bookDetails,[e.target.name]:e.target.value})}
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
          <Button variant="success" onClick={saveBook}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addbook