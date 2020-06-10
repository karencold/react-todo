import React, { useState } from 'react'
import Todos from './components/Todos'
import TodoAdd from './components/TodoAdd'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 23,
      title: 'This is simple todo app',
      done: false,
      editState: false
    },
    {
      id: 232,
      title: 'You can add, edit, delete and check as done',
      done: false,
      editState: false
    }
  ])
  const toggleDone = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    }))
  }
  const modifyTodo = (id, value) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.title = value
      }
      return todo
    }))
  }
  const toggleEdit = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.editState = !todo.editState
      }
      return todo
    }))
  }
  const deleteTodo = (id) => {
    let filteredTodos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(filteredTodos)
  }
  const addTodo = (newTitle) => {
    setTodos([...todos, { id: Date.now(), title: newTitle, editState: false }])
  }

  return (
    <div className="App">
      <h1>ToDo list</h1>
      <TodoAdd addTodo={(e) => addTodo(e)} />
      <Todos toggleEdit={(id) => toggleEdit(id)} toggleDone={(id) => toggleDone(id)} todos={todos} deleteTodo={(id) => deleteTodo(id)} modifyTodo={(id, value) => modifyTodo(id, value)} />
    </div>
  )
}


export default App
