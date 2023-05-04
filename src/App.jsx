import { useState } from "react"
import TodoInsert from "./components/TodoInsert"
import TodoList from "./components/TodoList"
import TodoTemplates from "./components/Todotemplates"



function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '공부하기',
      checked: true,
    },
    {
      id: 2,
      text: '복습하기',
      checked: true,
    },
    {
      id: 3,
      text: '운동하기',
      checked: false,
    }
  ])

  const onInsert = (text) => {
    setTodos(
      todos.concat([
        {
          id: todos.length + 1,
          text,
          checked: false
        }
      ])
    )
  }

  const onToggle = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, checked: !todo.checked} : todo
      )
    )
  }

  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <TodoTemplates>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle}/>
    </TodoTemplates>
  )
}

export default App
