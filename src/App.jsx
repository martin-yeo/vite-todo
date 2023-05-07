import { useRef, useState } from "react"
import TodoInsert from "./components/TodoInsert"
import TodoList from "./components/TodoList"
import TodoTemplates from "./components/Todotemplates"



function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '운동',
      checked: true,
    },
    {
      id: 2,
      text: '출근',
      checked: false,
    },
    {
      id: 3,
      text: '커피',
      checked: false,
    }
  ])

  const nextId = useRef(3)

  const onInsert = (text) => {
    setTodos(
      todos.concat([
        {
          id: ++nextId.current,
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
