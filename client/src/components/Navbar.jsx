import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar () {
    return(
        <header>
            <nav>
                <NavLink to = '/'>Homepage</NavLink>
                <NavLink to = '/Recommendations'>Recommended Comics</NavLink>
                <NavLink to = '/MyComicBookShelf'>MyComicBookShelf</NavLink>
            </nav>
        </header>
    )
}

export default Navbar