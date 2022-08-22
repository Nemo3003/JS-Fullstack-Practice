import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import {Note} from './components/Note'
import axios from 'axios'
import './App.css'

function App(props) {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => { 
    setTimeout(() =>{
      
    setLoading(true)
   /* fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setNotes(json)
        setLoading(false)
      })*/
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response =>{
        const {data} = response
        setNotes(data)
        setLoading(false)
      })
  }, 2000)
}, [])

  const handleChange = (e) => {
    setNewNote(e.target.value)
  }
  const handleSubmit = (e) => {
    event.preventDefault()
    const  noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote 
    }
    setNotes((prevNotes) => prevNotes.concat(noteToAddToState))
  setNewNote("")

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
    </div>
  )
}
//00:18:39

export default App
