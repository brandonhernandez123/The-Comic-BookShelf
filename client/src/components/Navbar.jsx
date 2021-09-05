import React from 'react'
import {NavLink} from 'react-router-dom'
import {Nav,Navbar,Container,NavbarBrand} from 'react-bootstrap'

function NavBar () {
    return(
        <header>
            <div className='wrapper'>
            <Navbar fixed='top' bg="dark" variant="dark">
            <Container>
                <NavbarBrand> <NavLink className='navlink' to = '/'>The Comic Bookshelf</NavLink></NavbarBrand> 
                
                
                
                
                <NavLink className='navlink'  to = '/recommendedcomics'>RecommendedComics</NavLink>
                
                <NavLink className='navlink'  to = '/mycomicbookshelf'>MyComics</NavLink>
                
                </Container>
                </Navbar>
                
                </div>
        </header>
    )
}

export default NavBar