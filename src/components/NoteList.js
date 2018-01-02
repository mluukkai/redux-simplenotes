import React from 'react'
import { importanceToggling } from './../reducers/noteReducer'
import PropTypes from 'prop-types'

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
      importanceToggling(id)
    )
  }
  render() {
    return (
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

const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {note.content} <strong>{note.important ? 'tärkeä' : ''}</strong>
    </li>
  )
}

export default NoteList