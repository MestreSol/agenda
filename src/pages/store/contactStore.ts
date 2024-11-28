import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Contact = {
  name: string
  moreContatcs: string[]
  number: string
  tag: string
}

const contactSlice = createSlice({
  name: 'contact',
  initialState: JSON.parse(
    localStorage.getItem('contacts') || '[]'
  ) as Contact[],
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.push(action.payload)
      localStorage.setItem('contacts', JSON.stringify(state))
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      const index = state.findIndex(
        (contact) => contact.name === action.payload
      )
      if (index !== -1) {
        state.splice(index, 1)
        localStorage.setItem('contacts', JSON.stringify(state))
      }
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.findIndex(
        (contact) => contact.name === action.payload.name
      )
      if (index !== -1) {
        state[index] = action.payload
        localStorage.setItem('contacts', JSON.stringify(state))
      }
    }
  }
})
export const { addContact, deleteContact, editContact } = contactSlice.actions

const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
