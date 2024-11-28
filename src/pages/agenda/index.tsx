import React from 'react'
import './style.css'

const Agenda: React.FC = () => {
  return (
    <div>
      <nav className="side-menu disabled">
        <h2>Categories</h2>
        <button className="side-menu__close">X</button>
        <ul>
          <li>
            <a>None</a>
          </li>
          <li>
            <a>Work</a>
          </li>
          <li>
            <a>Personal</a>
          </li>
        </ul>
        <button className="side-menu__new">New Category</button>
      </nav>
      <div className="container">
        <div className="agenda__area">
          <div className="agenda__list">
            <div className="agenda__item">
              <h3>Meeting</h3>
              <p className="agenda__item__tag">TAG</p>
              <p className="agenda__item__description">EMAIL</p>
              <p className="agenda__item__number">Number</p>
              <div className="agenda__item__actions">
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>
            <div className="agenda__item">
              <h2>Work</h2>
              <p>10:00 - 12:00</p>
            </div>
            <div className="agenda__item">
              <h2>Lunch</h2>
              <p>12:00 - 13:00</p>
            </div>
            <div className="agenda__item">
              <h2>Work</h2>
              <p>13:00 - 17:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agenda
