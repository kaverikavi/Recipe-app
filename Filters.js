import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterCategory } from '../redux/recipesSlice';

const Filters = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilterCategory(e.target.value));
  };

  return (
    <div className="filters">
      <label>Filter by Category:</label>
      <select onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
    </div>
  );
};

export default Filters;
