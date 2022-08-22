import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import {Note} from './components/Note'
import {getAllNotes} from './services/notes/getAllNotes'
import { createNote } from './services/notes/createNote'
import axios from 'axios'
import './App.css'

function App(props) {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => { 
    setTimeout(() =>{
      
    setLoading(true)
   /* fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setNotes(json)
        setLoading(false)
      })*/
      getAllNotes()
        .then(notes =>{
          setNotes(notes)
          setLoading(false)
        })
        .catch(e => {
          console.error(e)
          setError('THE API DID NOT RESPOND WELL')
        })
     
  }, 2000)
}, [])

  const handleChange = (e) => {
    setNewNote(e.target.value)
  }
  const handleSubmit = (e) => {
    event.preventDefault()

    
    const  noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1 
    }
      createNote(noteToAddToState)
        .then((newNote) => {
          setNotes(prevNotes.concat(newNote))
          setNewNote("")
        })
    //setNotes((prevNotes) => prevNotes.concat(noteToAddToState))


  }
  //This will be executed before all notes are loaded. The effect was caused by the setTimeout function above.
 /* if(notes.length === 0) {
    return (
      <div className="App">
        <h1>Notes</h1>
        <p>Notes loading...</p>
      </div>
    )
  }*/
  
  return (
    <div>
      <h1>Notes</h1>
    {
      loading ? <p>Loading...</p> : null
    }
    
      <ol>
        {
          notes
          .map((note) => (
            <Note key={note.id} {...note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={newNote} />
            <button>Creat Nota</button>

      </form>
      {
      error? error : ""
    }
    </div>
  )
}
//00:18:39

export default App
