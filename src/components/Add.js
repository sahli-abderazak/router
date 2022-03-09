import React , {useState} from 'react'
import {Button , Modal,InputGroup,FormControl} from 'react-bootstrap'


export default function Add({addHandler}) {
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  const [name, setName] = useState ('')
  const [image , setImage] = useState ('')
  const [description , setDescription] = useState ('')
  const [rate , setRate] = useState ('')
 
  const AddNewMovie = () => {
    addHandler ({id : Math.random () , name , description , image , rate  }) 
    handleClose ()
  }
    return (
      <div>
                <Button className ="ButtonBlue" variant="primary" onClick={handleShow}>
          Add new movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"> Title </InputGroup.Text>
    <FormControl
      placeholder="Enter the movie title"  onChange = {e => setName (e.target.value)} 
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"> Description </InputGroup.Text>
    <FormControl
      placeholder="Enter the movie description" onChange = {e => setDescription (e.target.value)}
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Image</InputGroup.Text>
    <FormControl
      placeholder="Enter movie URL image" onChange = {e => setImage (e.target.value)}
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Rate</InputGroup.Text>
    <FormControl
      placeholder="Rating" onChange = {e => setRate (e.target.value)}
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={AddNewMovie}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
  