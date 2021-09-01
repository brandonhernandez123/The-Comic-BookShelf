import './App.css'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Homepage'
import Recommendations from './pages/Recommendations'
import MyComicBookshelf from './pages/MyComicBookShelf'
import myComicBookshelf from './pages/MyComicBookShelf'
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <switch>
          <Route exact path="/" component={Home} />
          <Route path="/recommendedcomics" component={Recommendations} />
          <Route path="/mycomicbookshelf" component={myComicBookshelf} />
        </switch>
      </main>
    </div>
  )
}

export default App
