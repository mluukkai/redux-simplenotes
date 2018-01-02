import React from 'react'
import actionFor from './actionCreators'
import PropTypes from 'prop-types'

class NoteForm extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  addNote = (e) => {
    e.preventDefault()
    this.context.store.dispatch(
      actionFor.noteCreation(e.target.note.value)
    )
    e.target.note.value = ''
  }

  render() {
    return(
      <form onSubmit={this.addNote}>
        <input name='note' />
        <button>lisää</button>
      </form> 
    )
   
  }
}

NoteForm.contextTypes = {
  store: PropTypes.object
}

class NoteList extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  toggleImportance = (id) => (e) => {
    this.context.store.dispatch(
      actionFor.importanceToggling(id)
    )
  }
  render() {
    return(
      <ul>
        {this.context.store.getState().map(note =>
          <Note
            key={note.id}
            note={note}
            handleClick={this.toggleImportance(note.id)}
          />
        )}
      </ul>
    )
  }
}

NoteList.contextTypes = {
  store: PropTypes.object
}

const Note = ({note, handleClick}) => {
  return(
    <li onClick={handleClick}>
      {note.content} <strong>{note.important ? 'tärkeä' : ''}</strong>
    </li>
  )
}

class App extends React.Component {
  render() {
    return (
      <div>
        <NoteForm />
        <NoteList />
      </div>
    )
  }
}

export default App