import React, { createContext, useState, useMemo } from 'react';

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [apiKey, setApiKey] = useState('');
  const [records, setRecords] = useState([]);

  const contextValue = useMemo(
    () => ({
      apiKey,
      setApiKey,
      records,
      setRecords,
    }),
    [apiKey, setApiKey, records, setRecords]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
