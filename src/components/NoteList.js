import React from 'react'
import { importanceToggling } from './../reducers/noteReducer'
import { connect } from 'react-redux'

const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {note.content} <strong>{note.important ? 'tärkeä' : ''}</strong>
    </li>
  )
}

const NoteList = (props) => (
  <ul>
    {props.visibleNotes.map(note =>
      <Note
        key={note.id}
        note={note}
        handleClick={(e) => props.importanceToggling(note.id)}
      />
    )}
  </ul>
)
  
const notesToShow = (notes, filter) => {
  if (filter === 'ALL') {
    return notes
  }

  return filter === 'IMPORTANT'
    ? notes.filter(note => note.important)
    : notes.filter(note => !note.important)
}

const mapStateToProps = (state) => {
  return {
    visibleNotes: notesToShow(state.notes, state.filter) 
  }
}

export default connect(
  mapStateToProps,
  { importanceToggling }
)(NoteList)
