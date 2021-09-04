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
import { Carousel, CarouselItem, Button } from 'react-bootstrap'
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

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://1.bp.blogspot.com/-AMd7q1V2ES4/XoQYMDUarfI/AAAAAAAAWyo/nF0tAzJSwpseoxHFNcxBF91_prEEBbvigCLcBGAsYHQ/w919-h516-p-k-no-nu/iron-man-captain-america-fight-marvel-comics-uhdpaper.com-4K-4.2984-wp.thumbnail.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Welcome to The Comic BookShelf!</h1>
            <h2>About:</h2>
            <a
              className="socials"
              color="red"
              text-decoration="none"
              href="https://github.com/brandonhernandez123/The-Comic-BookShelf"
            >
              <h3>GitHub</h3>
            </a>
            <a
              className="socials"
              href="www.linkedin.com/in/brandonhdzgtz
"
            >
              <h3>LinkedIn</h3>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://2.bp.blogspot.com/-CcpAOigy-cw/UwCdkpuo6XI/AAAAAAAABJk/_nIoklxvAiE/s1600/marveluniverse.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1 color="black">Marvel API</h1>
            <h2>
              A huge thank you to the Marvel Comics API for making this app
              work! "Data provided by Marvel. © 2014 Marvel"
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.wallpapersafari.com/96/36/ZacTKP.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Future updates</h3>
            <ul>
              <li>Add ComicVine Api</li>
              <li>
                Add Authorization to create account and add comics to shelf
              </li>
              <li>View More Comic Details</li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <Search
        value={searchQuery}
        onChange={getResults}
        onSubmit={getSearchResults}
      />
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
