import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  /*const [count, setCount] = useState(()=>{
    return 4;
  })

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }*/

  /*return(<div className="card">
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>

  </div>)*/
  /*const [resourceType, setResourceType] = useState('posts')
  const [items, setItems]= useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  },[resourceType])
  <>
   <div>
    <button onClick={()=>setResourceType('posts')}>Posts</button>
    <button onClick={()=>setResourceType('users')}>Users</button>
    <button onClick={()=>setResourceType('comments')}>Comments</button>
   </div>
   <h1>{resourceType}</h1>
   {items.map(item =>{
    return <pre>{JSON.stringify(item)}</pre>
   })}
  </>*/
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  const handleResizing = () => {

      setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResizing)
    return () => {
      window.removeEventListener('resize', handleResizing)
    }
  },[])
  return (
    <div>{windowWidth}</div>
  )
}

export default App
