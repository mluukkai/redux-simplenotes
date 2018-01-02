import React from 'react'
import { noteCreation } from './../reducers/noteReducer'
import { connect } from 'react-redux'
import noteService from '../services/notes'

class NoteForm extends React.Component {

  addNote = async (e) => {
    e.preventDefault()
    const content = e.target.note.value 
    e.target.note.value = ''
    const newNote = await noteService.createNew(content)
    this.props.noteCreation(newNote)
   
  }

  render() {
    return (
      <form onSubmit={this.addNote}>
        <input name='note' />
        <button>lisää</button>
      </form>
    )
  }
}

export default connect(
  null,
  {noteCreation}
)(NoteForm)
