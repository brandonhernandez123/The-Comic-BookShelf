import React, { useState } from 'react'
import Search from '../components/Searchcomics'
import {
  MARVEL_COMICS,
  MARVEL_KEY,
  TIMESTAMP,
  HASH,
  BASE_URL
} from '../globals'
import axios from 'axios'
function Home(props) {
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const getSearchResults = async (e) => {
    try {
      e.preventDefault()
      const res = await axios.get(
        `${MARVEL_COMICS}${searchQuery}&ts=${TIMESTAMP}&apikey=${MARVEL_KEY}&hash=${HASH}`
      )
      console.log(res)
      setSearchResults(res.data.data.results)
      toggleSearched(true)
      setSearchQuery('')
    } catch (error) {}
  }

  const getResults = (e) => {
    setSearchQuery(e.target.value)
  }
  const addToShelf = async () => {
    const res = await axios.post(`${BASE_URL}/mycomicbookshelf`)
  }
  return (
    <div>
      <br />
      <Search
        value={searchQuery}
        onChange={getResults}
        onSubmit={getSearchResults}
      />
      <div className="grid">
        {searchResults.map((search) => (
          <div key={search.title} className="comicCard">
            <img
              className="thumbnail"
              src={`${search.thumbnail.path}/portrait_incredible.jpg`}
              alt={search.title}
            />
            <p>{search.description}</p>
            <h3>{search.title}</h3>
            <h4>{search.series.name}</h4>
            <button onSubmit={addToShelf}>Add To Shelf</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
