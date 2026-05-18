import { useState } from 'react'
import './App.css'

function App() {
  const todos = ["First task", "Second task", "Third task"];

  return (
    <>
      <h1>To do list!</h1>
      <ul>
      {
        todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))
      }
      </ul>
    </>
  )
}

export default App
