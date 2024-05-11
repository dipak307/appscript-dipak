// CustomizeColumn.js
import React, { useState } from 'react';
import "./CustomizeColumn.css";

const CustomizeColumn = ({ filters, onFilterChange }) => {
  const [item, setItem] = useState(true);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    onFilterChange(name, checked);
  }

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  }

  return (
    <>
      <button className='btn' onClick={() => setItem(!item)}>SHOW FILTER OR HIDE</button>
      {item ? (
        <div className="column customize">
          {/* First column with customization options */}
          <div> Customize <input type='checkbox' />
          </div>
          <div>
            <label>
              MEN
              <input type='checkbox' name="men" checked={filters.men} onChange={handleCheckboxChange} />
            </label>
            <label>
              WOMEN
              <input type='checkbox' name="women" checked={filters.women} onChange={handleCheckboxChange} />
            </label>
            <label>
              Baby & Kids
              <input type='checkbox' />
            </label>
          </div>
          <div className="customize-options">
            <label htmlFor="occasion">Occasion:</label>
            <select id="occasion" name="occasion" value={filters.occasion} onChange={handleSelectChange}>
              <option value="">All</option>
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="office">Office</option>
              {/* Add more options as needed */}
            </select>
            <label htmlFor="occasion">PATTERN:</label>
        <select id="occasion">
          <option value="">All</option>
          <option value="wedding">t-shirt</option>
          <option value="birthday">box design</option>
          <option value="office">plain</option>
          {/* Add more options as needed */}
        </select>
        <label htmlFor="occasion">SEGMENT:</label>
        <select id="occasion">
          <option value="">All</option>
          <option value="wedding">Wedding</option>
          <option value="birthday">Birthday</option>
          <option value="office">Office</option>
          {/* Add more options as needed */}
        </select>
        <label htmlFor="occasion">FABRIC:</label>
        <select id="occasion">
          <option value="">All</option>
          <option value="wedding">cotton</option>
          <option value="birthday">normal</option>
          <option value="office">silky</option>
          {/* Add more options as needed */}
        </select>
        <label htmlFor="occasion">WORK:</label>
        <select id="occasion">
          <option value="">All</option>
          <option value="wedding">office</option>
          <option value="birthday">home</option>
          
          {/* Add more options as needed */}
        </select>
            {/* Add more filter options */}
          </div>
        </div>
      ) : (<div></div>)}
    </>
  );
}

export default CustomizeColumn;
