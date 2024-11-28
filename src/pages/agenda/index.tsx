import React, { useEffect } from 'react'
import './style.css'

type Contact ={
  name:string,
  moreContatcs: string[],
  number: string,
  tag: string
}

function fakePersistence(action: string, contact: Contact){
  const contacts = JSON.parse(localStorage.getItem('contacts') || '[]') as Contact[]
  if(action === 'add'){
    contacts.push(contact)
    addItem(contact)

  }
  if(action === 'delete'){
    const index = contacts.findIndex(item => item.name === contact.name)
    contacts.splice(index, 1)
    deleteItem(contact)
  }
  if(action === 'edit'){
    const index = contacts.findIndex(item => item.name === contact.name)
    contacts[index] = contact
    editItem(contact)
  }
}

function addItem(prop: Contact){
  const item = document.createElement('div')
  item.className = 'agenda__item'
  item.innerHTML = `
    <h3>${prop.name}</h3>
    <p class="agenda__item__tag">${prop.tag}</p>
    <p class="agenda__item__description">${prop.moreContatcs}</p>
    <p class="agenda__item__number">${prop.number}</p>
    <div class="agenda__item__actions">
      <button id="delete">Delete</button>
      <button id='edit'>Edit</button>
    </div>
  `
  document.querySelector('.agenda__list')?.appendChild(item)
}

function deleteItem(prop: Contact){
  const item = document.querySelector(`.agenda__item > h3:contains(${prop.name})`)?.parentElement
  item?.remove()
}

function editItem(prop: Contact){
  const item = document.querySelector(`.agenda__item > h3:contains(${prop.name})`)?.parentElement
  const tagElement = item?.querySelector('.agenda__item__tag');
  if (tagElement) {
    tagElement.textContent = prop.tag;
  }
  const descriptionElement = item?.querySelector('.agenda__item__description');
  if (descriptionElement) {
    descriptionElement.textContent = prop.moreContatcs.join(', ');
  }
  const numberElement = item?.querySelector('.agenda__item__number');
  if (numberElement) {
    numberElement.textContent = prop.number;
  }
}
function openEditor(){
  const editor = document.getElementById('editor')
  editor?.classList.add('active')
}
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
            {
              (JSON.parse(localStorage.getItem('contacts') || '[]') as Contact[]).map((item, index) => (
                <div className="agenda__item" key={index}>
                  <h3>{item.name}</h3>
                  <p className="agenda__item__tag">{item.tag}</p>
                  <p className="agenda__item__description">{item.moreContatcs}</p>
                  <p className="agenda__item__number">{item.number}</p>
                  <div className="agenda__item__actions">
                    <button id="delete" onClick={() => fakePersistence("delete", item)}>Delete</button>
                    <button id='edit' onClick={() => openEditor()}>Edit</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div id="editor">

        </div>
      </div>
    </div>
  )
}

export default Agenda
