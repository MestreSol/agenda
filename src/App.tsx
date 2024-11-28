import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import './App.css'
import Agenda from './pages/agenda'
import NewContact from './pages/newContact'
function App() {
  return (
    <Router>
      <header className="menu">
        <div className="container">
          <nav>
            <div className="menu__brand">
              <h1>Agenda</h1>
            </div>
            <div className="menu__areaItems">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="/">Home</a>
                </li>
                <li className="menu__item">
                  <a href="/agenda">Agenda</a>
                </li>
                <li className="menu__item">
                  <a className="menu__new" href="/new">
                    Add Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/new" element={<NewContact />} />
      </Routes>
    </Router>
  )
}

export default App
