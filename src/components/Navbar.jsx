import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Navbar() {
  return (
    <div className='section-navbar'>
      <div className='nav-content'>
        <FaGithub className='nav-icon' />
        <h2 className='nav-text'>Github Finder</h2>
      </div>
    </div>
  );
}

export default Navbar;
