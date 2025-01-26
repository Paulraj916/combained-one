// components/Filter.js
import React from 'react';

const Filter = ({ onFilterChange }) => (
  <div>
    <select onChange={(e) => onFilterChange(e.target.value)}>
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
    </select>
  </div>
);

export default Filter;