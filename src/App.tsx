import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import './App.css'
function App() {
  return (
    <Router>
      <header className='menu'>
        <div className='container'>
          <nav>
            <div className='menu__brand'>
              <h1>Agenda</h1>
            </div>
            <div className='menu__areaItems'>
              <ul className='menu__list'>
                <li className='menu__item'>
                  <a href="/">Home</a>
                </li>
                <li className='menu__item'>
                  <a href="/about">About</a>
                </li>
                <li className='menu__item'>
                  <button className='menu__new'>
                    Add Contact
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
