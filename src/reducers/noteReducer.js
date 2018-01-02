import noteService from '../services/notes'

const noteReducer = (state = [], action) => {
  console.log('ACTION: ',action)
  switch(action.type) {
    case 'NEW_NOTE':
      return [...state, action.data]
    case 'INIT_NOTES':
      return action.data     
    case 'TOGGLE_IMPORTANCE':
      const id = action.data.id
      const newState = state.filter(n=>n.id!==id)
      const noteToChange = state.find(n => n.id === id)
      const chagedNote = { ...noteToChange, important: !noteToChange.important }

      return [...newState, chagedNote]
    default: 
    return state
  }
}

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes
    })
  }
}

export const createNew = (content) => {
  return async (dispatch) => {
    const newNote = await noteService.createNew(content)
    dispatch({
      type: 'NEW_NOTE',
      data: newNote
    })
  }
}

export const toggleImportance = (note) => {
  return async (dispatch) => {
    const changedNote = { 
      content: note.content,
      importance: !note.importance
    }

    await noteService.createNew(note.id, changedNote)
    dispatch({
      type: 'TOGGLE_IMPORTANCE',
      data: { id: note.id },
    })
  }
}

export default noteReducer
