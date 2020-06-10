import React, { useRef } from 'react'

function TodoAdd(props) {
  const textInput = useRef(null)
  const addTodoKeyHandler = (e) => {

    if (e.key === 'Enter') {
      if (e.target.value.length > 2) {
        props.addTodo(e.target.value)
        e.target.value = ''
      }
    }

  }
  const addTodoHandler = () => {
    if (textInput.current.value.length > 2) {
      props.addTodo(textInput.current.value)
      textInput.current.value = ''
    }
  }
  return (
    <div className="todoAdd">
      <input ref={textInput} onKeyUp={addTodoKeyHandler} placeholder="Type todo and push enter" />
      <button onClick={addTodoHandler}>Add todo</button>
    </div>
  )
}

export default TodoAdd
