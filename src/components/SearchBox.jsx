import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBox() {
  return (
    <div className='searchbox-section'>
      <div className='searchbox-content'>
        <h2>Search Github User</h2>
        <div className='search-form'>
          <input type='text' placeholder='type here...' />
          <div className='search-icons'>
            <FaSearch className='search-icon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
