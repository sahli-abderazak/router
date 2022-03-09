import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import NetflixLogo from '../NetflixLogo.png'

function NavBar() {
    return (
        <div>
              <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand  href="#home"> <img className =' NetflixLogo' src ={NetflixLogo} alt ='Logo' /></Navbar.Brand>
   
    </Container>
  </Navbar>
        </div>
    )
}

export default NavBar
