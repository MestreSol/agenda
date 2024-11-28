import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  RootState,
  addContact,
  deleteContact,
  editContact,
  Contact
} from '../store/contactStore'
import './style.css'

const Agenda: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts)
  const dispatch = useDispatch()

  const handleDelete = (name: string) => {
    dispatch(deleteContact(name))
  }

  const handleEdit = (contact: Contact) => {
    dispatch(editContact(contact))
  }

  const openEditor = (contact: Contact) => {
    const editor = document.getElementById('editor')
    if (editor) {
      editor.innerHTML = `
        <div class="editor__form">
          <h2>Edit Contact</h2>
          <label>Name: <input type="text" id="edit-name" value="${contact.name}" /></label>
          <label>Tag: <input type="text" id="edit-tag" value="${contact.tag}" /></label>
          <label>Description: <input type="text" id="edit-description" value="${contact.moreContatcs}" /></label>
          <label>Number: <input type="text" id="edit-number" value="${contact.number}" /></label>
          <button id="save">Save</button>
          <button id="cancel">Cancel</button>
        </div>
      `

      document.getElementById('save')?.addEventListener('click', () => {
        const updatedContact: Contact = {
          name: (document.getElementById('edit-name') as HTMLInputElement)
            .value,
          tag: (document.getElementById('edit-tag') as HTMLInputElement).value,
          moreContatcs: (
            document.getElementById('edit-description') as HTMLInputElement
          ).value.split(','),
          number: (document.getElementById('edit-number') as HTMLInputElement)
            .value
        }
        handleEdit(updatedContact)
        editor.innerHTML = ''
      })

      document.getElementById('cancel')?.addEventListener('click', () => {
        editor.innerHTML = ''
      })
    }
  }
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
            {contacts.map((item: Contact, index: number) => (
              <div className="agenda__item" key={index}>
                <h3>{item.name}</h3>
                <p className="agenda__item__tag">{item.tag}</p>
                <p className="agenda__item__description">{item.moreContatcs}</p>
                <p className="agenda__item__number">{item.number}</p>
                <div className="agenda__item__actions">
                  <button id="delete" onClick={() => handleDelete(item.name)}>
                    Delete
                  </button>
                  <button id="edit" onClick={() => openEditor(item)}>
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="editor"></div>
      </div>
    </div>
  )
}

export default Agenda
