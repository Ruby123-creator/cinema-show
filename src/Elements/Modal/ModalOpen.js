

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.css'
const ModalOpen =({moviename})=>{
    const [show, setShow] = useState(false);
    const [user ,setUser] = useState(null)
    const [seats ,setseats] = useState(0)
    const [email ,setEmail] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => 
    {
        setShow(true);

    }
    const BookTicket =()=>{
        let userDetails ={
            username:user ,
            seatNumber:seats,
            emailId:email,
        }

        
        if(user && seats!==0){
        localStorage.setItem('user' ,JSON.stringify(userDetails))
        alert("Movie Tickets Booked")
        setShow(false)
        }
        else{
            alert('Enter the username or choose atleast 1 candidate to Book the ticket')
        }
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        Book Ticket
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Movie Ticket</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>{moviename}</h3>
            <div>
              <form action="">
                <input type="text" name="" placeholder='Enter username' onChange={(e)=>setUser(e.target.value)}  id="" />
                <input type="number" name="" placeholder='Enter candidates' onChange={(e)=>setseats(e.target.value)} id="" />
                <br />
                <input type="email" name="" placeholder='Enter  email' id="" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" name="" placeholder='enter  phone number' id="" />
                <br />
                <label htmlFor="">Enter Row</label>
                <input type="number" />
                <br />
                <label htmlFor="">Enter seat</label>
                <input type="number"  />
                <br />
                 <label htmlFor="">Total Bill</label>
                 <input type="number" value={seats*160}  />
                 <br />
                  <p>*prices of each ticket is 160</p>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={BookTicket}>
            Book Ticket
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


  export default ModalOpen;