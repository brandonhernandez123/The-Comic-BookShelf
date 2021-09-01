import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar () {
    return(
        
            <nav>
                <h2>The Comic BookShelf</h2>
                <div>
                <NavLink to = '/'>Home</NavLink>
                
                <NavLink to = '/recommendedcomics'>RecommendedComics</NavLink>
                <NavLink to = '/mycomicbookshelf'>MyComicBookShelf</NavLink>
                </div>
            </nav>
        
    )
}

export default Navbar