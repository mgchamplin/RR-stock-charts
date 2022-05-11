import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import "./TopNavBar.css"
import "./App.css"

function TopNavbar(){
    return (
      <div>
        <Navbar id="TopNavBar" bg="primary" variant="dark">
            <Container >
              <Nav className="m-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="account">Account</Nav.Link>
                <Nav.Link href="links">Investment Links</Nav.Link>
              </Nav>
            </Container>
        </Navbar>
      </div>
    )
  }

  export default TopNavbar