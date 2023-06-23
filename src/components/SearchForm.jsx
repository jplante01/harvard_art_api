import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const { setRecords, apiKey } = useContext(AppContext);
  const apiUrl = 'https://api.harvardartmuseums.org/';
  const resource = 'object?';
  const filter = 'keyword='

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };
  
  const fetchData = async () => {
    try {
      console.log(`${apiUrl}${resource}=${searchTerm}&apikey=${apiKey}`);
      const response = await fetch(
        `${apiUrl}${resource}${filter}${searchTerm}&apikey=${apiKey}`
      );
      const jsonData = await response.json();
      const fetchedRecords = jsonData.records;
      console.log(fetchedRecords);
      setRecords(fetchedRecords);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="ml-auto">
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