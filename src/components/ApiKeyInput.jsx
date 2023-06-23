import React, { useState } from 'react';

function ApiKeyInput({ setApiKey, setApiKeyDialogOpen }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    console.log(value);
    event.preventDefault();
    if (
      !value.match(
        /^[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$/
      )
    ) {
      console.log('error');
      setError(
        'Please enter a valid hyphenated number in the format: 00000000-0000-0000-0000-000000000000'
      );
      return;
    }
    console.log('api key accepted');
    setApiKey(value);
    setApiKeyDialogOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="ml-auto">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Please enter an api key"
          className="input input-sm mr-2"
        />
        <button className="btn-sm btn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default ApiKeyInput;
