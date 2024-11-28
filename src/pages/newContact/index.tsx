import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../store/contactStore'
import { useNavigate } from 'react-router-dom'

const NewContact: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const id = name
    dispatch(addContact({id, name, email, number, tag: 'default' }))
    console.log('New Contact:', { name, email, number })
    navigate('/agenda')
  }

  return (
    <div>
      <h1>Add New Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="number">Number:</label>
          <input
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  )
}

export default NewContact
