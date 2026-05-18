import { useState } from 'react'
import './App.css'
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState(["First task", "Second task", "Third task"]);
  console.log("Current todos: ", todos);

  // function handleClick() {
  //   setTodos(["New task"]);
  // }

  return (
    <>
      <h1>To do list!</h1>
      {/* <button onClick={handleClick}>Click this button</button> */}
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

export default App
