import React from 'react'

const Todo = (props) => {

  const modifyTodo = (e) => {
    props.modifyTodo(e.target.value)
  }
  const checkForEnter = (e) => {
    if (e.key === 'Enter') {
      e.target.blur()
    }
  }

  const todoLeftGapStyle = { marginLeft: '5px' }
  let todoItem


  if (props.editState) {
    todoItem = <input type="text" style={todoLeftGapStyle} value={props.title} onChange={modifyTodo} onBlur={props.toggleEdit} onKeyUp={checkForEnter} />
  } else {
    todoItem = <span style={todoLeftGapStyle} onClick={props.toggleEdit} className={props.done ? 'done' : ''}>{props.title}</span>
  }

  return (
    <li className="todoItem">
      <input type="checkbox" style={{ alignSelf: 'self-start' }} onChange={props.toggleDone} />
      {todoItem}
      <span style={{ cursor: "pointer" }} onClick={props.deleteTodo}>X</span>
    </li>
  )
}


export default Todo
