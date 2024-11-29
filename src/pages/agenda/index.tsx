import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  RootState,
  deleteContact,
  editContact,
  Contact
} from '../store/contactStore'
import { AgendaArea, AgendaItem, AgendaItemActions, AgendaItemNumber, AgendaItemTag, AgendaList, SideMenu, SideMenuTitle } from './style'
import { Container } from '../../GlobalStyle'

const Agenda: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts)
  const dispatch = useDispatch()

  const handleDelete = (name: string) => {
    dispatch(deleteContact(name))
  }

  const handleSave = (updatedContact: Contact) => {
    dispatch(editContact(updatedContact))
    window.location.reload() // Recarrega a página após salvar
  }

  const openEditor = (contact: Contact) => {
    const editor = document.getElementById('editor')
    if (editor) {
      editor.innerHTML = `
        <div class="editor__form">
          <h2>Edit Contact</h2>
          <label>Name: <input type="text" id="edit-name" value="${contact.name}" /></label>
          <label>Tag: <input type="text" id="edit-tag" value="${contact.tag}" /></label>
          <label>Email: <input type="text" id="edit-email" value="${contact.email}" /></label>
          <label>Number: <input type="text" id="edit-number" value="${contact.number}" /></label>
          <button id="save">Save</button>
          <button id="cancel">Cancel</button>
        </div>
      `

      document.getElementById('save')?.addEventListener('click', () => {
        const updatedContact: Contact = {
          id: contact.id,
          name: (document.getElementById('edit-name') as HTMLInputElement)
            .value,
          tag: (document.getElementById('edit-tag') as HTMLInputElement).value,

          email: (document.getElementById('edit-email') as HTMLInputElement)
            .value,
          number: (document.getElementById('edit-number') as HTMLInputElement)
            .value
        }
        handleSave(updatedContact)
        editor.innerHTML = ''
      })

      document.getElementById('cancel')?.addEventListener('click', () => {
        editor.innerHTML = ''
      })
    }
  }
  return (
    <Container>
        <AgendaArea>
          <AgendaList>
            {contacts.map((item: Contact, index: number) => (
              <AgendaItem key={index}>
                <h3>{item.name}</h3>
                <AgendaItemTag>{item.tag}</AgendaItemTag>
                <AgendaItemNumber>{item.number}</AgendaItemNumber>
                <AgendaItemActions>
                  <button id="delete" onClick={() => handleDelete(item.name)}>
                    Delete
                  </button>
                  <button id="edit" onClick={() => openEditor(item)}>
                    Edit
                  </button>
                </AgendaItemActions>
              </AgendaItem>
            ))}
            </AgendaList>
        </AgendaArea>

        <div id="editor"></div>

    </Container>
  )
}

export default Agenda
