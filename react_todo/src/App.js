// App.js
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import Filter from './components/Filter';
import './App.css';

function App() {
  // State for todos and filter
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    if (storedTodos) setTodos(storedTodos);
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // Function to toggle a todo's completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filter todos based on the current filter state
  const filteredTodos = todos.filter(todo => 
    filter === 'all' || (filter === 'completed' ? todo.completed : !todo.completed)
  );

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <Filter onFilterChange={setFilter} />
      <TodoList todos={filteredTodos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default App;