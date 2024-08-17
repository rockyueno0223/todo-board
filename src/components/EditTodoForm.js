import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("")
  }

  const bgStyle = {
    backgroundColor: `${task.bgColor}`
  }

  return (
    <form className='EditTodoForm' style={bgStyle} onSubmit={handleSubmit}>
      <input type='text' name='editTask' className='edit-todo-input' value={value} onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className='edit-todo-btn' >Update</button>
    </form>
  )
}

export default EditTodoForm
