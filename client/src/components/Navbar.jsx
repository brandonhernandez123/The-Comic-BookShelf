import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar () {
    return(
        <header>
            <div className='wrapper'>
            <nav>
                <div className='titleofpage'>
                <h3 className ="title">The Comic Bookshelf</h3>
                </div>
                
                <NavLink className='navlink' to = '/'>Home</NavLink>
                
                <NavLink className='navlink'  to = '/recommendedcomics'>RecommendedComics</NavLink>
                <NavLink className='navlink'  to = '/mycomicbookshelf'>MyComicBookShelf</NavLink>
                <NavLink className='navlink' to = '/recommendacomic'>Recommend a Comic</NavLink>
                
                </nav>
                
                </div>
        </header>
    )
}

export default Navbar