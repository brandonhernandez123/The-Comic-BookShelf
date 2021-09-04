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
import { Carousel, CarouselItem } from 'react-bootstrap'
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
    <div className="homepagebody">
      <h1>Search Comics Below</h1>
      <br />
      <Search
        value={searchQuery}
        onChange={getResults}
        onSubmit={getSearchResults}
      />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/comic-style-wallpaper_79603-1248.jpg?size=626&ext=jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://2.bp.blogspot.com/-CcpAOigy-cw/UwCdkpuo6XI/AAAAAAAABJk/_nIoklxvAiE/s1600/marveluniverse.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/pDF7GZ6.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="grid" background-color="darkgrey">
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
