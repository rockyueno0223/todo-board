import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  const colors = ['#F4B2BB', '#AFE4E5', '#FFFFD1', '#C2F6CD']

  const addTodo = todo => {
    setTodos([...todos, {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
      degree: Math.floor(Math.random() * 21) - 10,
      bgColor: colors[Math.floor(Math.random() * colors.length)]
    }])
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }

  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo} />
      <div className='todo-inner-wrapper'>
        {todos.map((todo, index) => (
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} key={index}/>
          ) : (
            <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
          )
        ))}
      </div>
    </div>
  )
}

export default TodoWrapper
