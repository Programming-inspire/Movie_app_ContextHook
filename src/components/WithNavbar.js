// WithNavbar.js
import React, { useState } from 'react';
import Navbar from './Navbar';

const WithNavbar = (WrappedComponent) => {
  return (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (value) => {
      setSearchTerm(value);
    };

    return (
      <div>
        <Navbar onSearch={handleSearch} />
        <WrappedComponent searchTerm={searchTerm} {...props} />
      </div>
    );
  };
};

export default WithNavbar;
