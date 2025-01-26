// components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem 
        key={todo.id} 
        todo={todo} 
        onToggle={onToggleTodo} 
        onDelete={onDeleteTodo} 
      />
    ))}
  </ul>
);

export default TodoList;