import React from 'react'
import {NavLink} from 'react-router-dom'
import {Nav,Navbar,Container,NavbarBrand,NavDropdown} from 'react-bootstrap'

function NavBar () {
    return(
        <header>
            <div className='wrapper'>
            <Navbar fixed='top' bg="dark" variant="dark">
            <Container>
                <NavbarBrand> <NavLink className='navtitle' to = '/'>The Comic Bookshelf</NavLink></NavbarBrand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
    <NavDropdown title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item><NavLink className='navlink'  to = '/recommendedcomics'>RecommendedComics</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink className='navlink'  to = '/mycomicbookshelf'>MyComics</NavLink></NavDropdown.Item>
          
        </NavDropdown>
        
                
                
                </Nav>
                </Navbar.Collapse>
                
                
                </Container>
                </Navbar>
                
                </div>
        </header>
    )
}

export default NavBar