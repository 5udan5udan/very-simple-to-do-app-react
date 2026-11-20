import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(text, priority) {
    const newTodo = {
      id: Date.now() + Math.random(),
      text: text,
      priority: Number(priority),
      completed: false,
    }
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  function updateTodo(id, updatedFields) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedFields } : todo
      )
    )
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }
  
  return (
    <div className="container">
      <div className="page-header">
        <h1>Very Simple Todo App</h1>
        <p className="lead">Track all of the things</p>
      </div>

      <div className="row">
        <div className="col-md-4">
          <TodoForm addTodo={addTodo} />
        </div>
        <div className="col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">View Todos</div>
            <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
