import React from 'react'
import NoteForm from './components/NoteForm.js'
import NoteList from './components/NoteList.js'

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