import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar () {
    return(
        <header>
            <nav>
                
                
                
                <NavLink to = '/'>Home</NavLink>
                
                <NavLink className = 'navreco' to = '/recommendedcomics'>RecommendedComics</NavLink>
                <NavLink className = 'navshelf' to = '/mycomicbookshelf'>MyComicBookShelf</NavLink>
                <NavLink to = '/recommendacomic'>Recommend a Comic</NavLink>
                
                </nav>
                <h3>The Comic Bookshelf</h3>
        </header>
    )
}

export default Navbar