import { useState } from 'react'
import './App.css'
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState(["First task", "Second task", "Third task"]);
  const [input, setInput] = useState("");
  
  function handleAdd() {
    console.log("Add clicked.");
    if(input.trim() === ""){ 
      console.log("Empty todo detected.");
      return;
    }

    setTodos([...todos, input.trim()]);
    setInput("");
  }

  function handleKeyDown(e) {
    if(e.key === "Enter")
      handleAdd();
  }

  return (
    <>
      <h1>To do list!</h1>
      <input 
        type="text" 
        placeholder="Add a new todo" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
      {
        todos.map((todo, index) => (
          <TodoItem key={index} text={todo} />
        ))
      }
      </ul>
    </>
  )
}

export default App;