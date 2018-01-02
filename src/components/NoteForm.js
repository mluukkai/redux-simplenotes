import React from 'react'
import { noteCreation } from './../reducers/noteReducer'
import { connect } from 'react-redux'

class NoteForm extends React.Component {

  addNote = (e) => {
    e.preventDefault()
    this.props.noteCreation(e.target.note.value)
    e.target.note.value = ''
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
