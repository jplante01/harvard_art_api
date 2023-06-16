import React, { useState } from 'react';

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="search"
          className="input input-sm"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
