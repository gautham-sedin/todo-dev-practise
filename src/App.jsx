import { useState } from 'react'
import './App.css'
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([
    { id: Date.now(), text: "Buy groceries", completed: false },
    { id: Date.now() + 1, text: "Do laundry", completed: false },
    { id: Date.now() + 2, text: "Read a book", completed: false }
  ]);
  const [input, setInput] = useState("");
  
  function handleAdd() {
    console.log("Add clicked.");
    if(input.trim() === ""){ 
      console.log("Empty todo detected.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false
    };

    console.log("New task added: ", newTodo);

    setTodos([...todos, newTodo]);
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
          <TodoItem key={todo.id} text={todo.text} />
        ))
      }
      </ul>
    </>
  )
}

export default App;