import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const { setData, apiKey, setUrl } = useContext(AppContext);
  const apiUrl = 'https://api.harvardartmuseums.org/';
  const resource = 'object?';
  const filter = 'keyword=';
  const requestUrl = `${apiUrl}${resource}${filter}${searchTerm}&apikey=${apiKey}&size=25`;

  // async function fetchData() {
  //   const requestUrl = `${apiUrl}${resource}${filter}${searchTerm}&apikey=${apiKey}&size=25`;
  //   console.log(requestUrl);
  //   try {
  //     const response = await fetch(requestUrl);
  //     const jsonData = await response.json();
  //     const fetchedData = jsonData;
  //     setData(fetchedData);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(requestUrl);
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
