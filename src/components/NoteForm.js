import React from 'react'
import { createNew } from './../reducers/noteReducer'
import { connect } from 'react-redux'
import noteService from '../services/notes'

class NoteForm extends React.Component {

  addNote = async (e) => {
    e.preventDefault()
    const content = e.target.note.value 
    e.target.note.value = ''
    this.props.createNew(content)
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
  { createNew}
)(NoteForm)
