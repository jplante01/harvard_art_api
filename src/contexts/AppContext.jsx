import { createContext, useState } from 'react';

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [apiKey, setApiKey] = useState('');
  const [records, setRecords] = useState([]);

  return (
    <AppContext.Provider value={{ apiKey, setApiKey, records, setRecords }}>
      {children}
    </AppContext.Provider>
  );
  
}

export { AppContext, AppContextProvider };
