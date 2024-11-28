import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Agenda from './pages/agenda'
import NewContact from './pages/newContact'
import { Container, GlobalStyle, Menu, MenuAreaItems, MenuBrand, MenuItem, MenuList } from './GlobalStyle'
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Menu>
        <Container>
          <nav>
            <MenuBrand>
              <h1>Agenda</h1>
            </MenuBrand>
            <MenuAreaItems>
              <MenuList>
                <MenuItem>
                  <a href="/">Home</a>
                </MenuItem>
                <MenuItem>
                  <a href="/agenda">Agenda</a>
                </MenuItem>
                <MenuItem>
                  <a href="/new">Add Contact</a>
                </MenuItem>
              </MenuList>
            </MenuAreaItems>
          </nav>
        </Container>
      </Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/new" element={<NewContact />} />
      </Routes>
    </Router>
  )
}

export default App
