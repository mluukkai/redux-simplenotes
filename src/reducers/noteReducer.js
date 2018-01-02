
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

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const noteInitialization = (data) => {
  return {
    type: 'INIT_NOTES',
    data
  }
}

export const noteCreation = (data) => {
  return {
    type: 'NEW_NOTE',
    data
  }
}

export const importanceToggling = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  }
}

export default noteReducer
