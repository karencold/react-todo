import React from 'react'
import Todo from './Todo'

function Todos(props) {

  return (
    <ul>
      {(
        props.todos.map(todo => {
          return <Todo toggleDone={() => props.toggleDone(todo.id)} toggleEdit={() => { props.toggleEdit(todo.id) }} done={todo.done} title={todo.title} editState={todo.editState} key={todo.id} deleteTodo={() => props.deleteTodo(todo.id)} modifyTodo={(value) => props.modifyTodo(todo.id, value)} />
        })
      )}
    </ul>
  )

}

export default Todos
