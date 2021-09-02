import React, { useState, useEffect } from 'react'
import ComicShelf from '../components/MyComics'
import { BASE_URL } from '../globals'
import axios from 'axios'
function MyComicBookshelf(props) {
  const [comic, setMyComics] = useState([])
  const [wishlist, setWishList] = useState([])

  useEffect(() => {
    async function myShelf() {
      const res = await axios.get(`${BASE_URL}/mycomicbookshelf`)
      setMyComics(res.data.myComics)
    }
    myShelf()
  }, [])
  console.log(props.comic)

  return (
    <div>
      <h3>My Comics</h3>
      <br />
      <div>
        {comic.map((comics) => (
          <div key={comics.title} className="comicCard">
            <h3>{comics.title}</h3>
            <img
              className="thumbnail"
              src={`${comics.thumbnail}`}
              alt={comics.title}
            />
          </div>
        ))}
      </div>

      <h4>Wishlist</h4>
    </div>
  )
}

export default MyComicBookshelf
