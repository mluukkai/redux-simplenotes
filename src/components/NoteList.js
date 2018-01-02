import React from 'react'
import { importanceToggling } from './../reducers/noteReducer'
import { connect } from 'react-redux'

class NoteList extends React.Component {
  render() {
    const notesToShow = () => {
      const { notes, filter } = this.props
      if (filter==='ALL') {
        return notes
      } 
      
      return filter==='IMPORTANT' 
        ? notes.filter(note => note.important)
        : notes.filter(note => !note.important)
    }

    return (
      <ul>
        {notesToShow().map(note =>
          <Note
            key={note.id}
            note={note}
            handleClick={(e) => this.props.importanceToggling(note.id)}
          />
        )}
      </ul>
    )
  }
}

const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {note.content} <strong>{note.important ? 'tärkeä' : ''}</strong>
    </li>
  )
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    filter: state.filter
  }
}

export default connect(
  mapStateToProps,
  { importanceToggling }
)(NoteList)
