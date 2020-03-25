import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Hiatus from './pages/HiatusPage'
import Snarky from './pages/SnarkyPage'
import UMO from './pages/UmoPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul className="top-links">
            <li>
              <Link className="band-links" to="/">
                Go Home
              </Link>
            </li>
            <li>
              <Link className="band-links" to="/hiatus">
                Hiatus Kaiyote
              </Link>
            </li>
            <li>
              <Link className="band-links" to="/snarky">
                Snarky Puppy
              </Link>
            </li>
            <li>
              <Link className="band-links" to="/umo">
                Unknown Mortal Orchestra
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hiatus" component={Hiatus}></Route>
        <Route exact path="/snarky" component={Snarky}></Route>
        <Route exact path="/umo" component={UMO}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
