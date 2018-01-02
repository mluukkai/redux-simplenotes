const initalState = [
  { content: 'reduxin storen toiminnan määrittelee reduceri', important: true},
  { content: 'storen tilassa voi olla mielivaltaista dataa', important: false}
]

const noteReducer = (state = initalState, action) => {
  switch(action.type) {
    case 'NEW_NOTE':
      return [...state, action.data]
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

export const noteCreation = (content) => {
  return {
    type: 'NEW_NOTE',
    data: {
      content,
      important: false,
      id: generateId()
    }
  }
}

export const importanceToggling = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  }
}

export default noteReducer
