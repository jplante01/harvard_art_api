import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const { setFormInput } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
    setFormInput(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="ml-8">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="search"
          className="input input-sm mr-2"
        />
        <button className="btn-sm btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
