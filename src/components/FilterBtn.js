import React from 'react';
import '../assets/styles/Filters.css';
import FilterIcon from '../assets/icons/filter-icon.png';

function FilterBtn() {
  return (
    <div className="filter-btn-container">
      <img src={FilterIcon} className="filter-icon" />
      <div className='filter-label'>
        Filters
      </div>
    </div>
  );
}

export default FilterBtn;