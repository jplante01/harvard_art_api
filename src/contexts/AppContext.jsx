import { createContext, useState } from 'react';

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [apiKey, setApiKey] = useState('');
  const [formInput, setFormInput] = useState('');

  return (
    <AppContext.Provider value={{ apiKey, setApiKey, formInput, setFormInput }}>
      {children}
    </AppContext.Provider>
  );
  
}

export { AppContext, AppContextProvider };
