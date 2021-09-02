import {React, useState, useEffect} from 'react'
import axios from 'axios'

function ComicShelf (props){
return(
<div className="grid">

        {props.comic.map((comic) => (
          <div key={comic.id} className="comicCard">
            <h3>{comic.title}</h3>
            
            <h5>{comic.series}</h5>
          </div>
        ))}
      </div>
)}
export default ComicShelf