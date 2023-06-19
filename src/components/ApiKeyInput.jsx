import React, { useState } from 'react';

function ApiKeyInput({apiKey, setApiKey}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
  };

  const handleChange = (event) => {
    setApiKey(event.target.value);
  };

  return (
    <div className="ml-auto">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={apiKey}
          onChange={handleChange}
          placeholder="Please enter an api key"
          className="input input-sm mr-2"
        />
        <button className="btn btn-sm" type="submit">Save</button>
      </form>
    </div>
  );
}

export default ApiKeyInput;
