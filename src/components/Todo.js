import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {

  const rotateStyle = {
    transform: `rotate(${task.degree}deg)`
  }

  const bgStyle = {
    backgroundColor: `${task.bgColor}`
  }

  const todoStyles = {
    ...rotateStyle,
    ...bgStyle
  }

  return (
    <div className='Todo' style={todoStyles}>
      <div className={`${task.completed ? 'completed' : ''} todo-task-wrapper`} onClick={() => toggleComplete(task.id)} >
        {task.task}
      </div>
      <div className='todo-icon-wrapper'>
        <FontAwesomeIcon icon={faEdit} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )
}

export default Todo
