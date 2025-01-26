// components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
    <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)}/>
    {todo.text}
    <button onClick={() => onDelete(todo.id)}>Delete</button>
  </li>
);

export default TodoItem;