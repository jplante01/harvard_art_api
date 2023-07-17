import React, { createContext, useState, useMemo } from 'react';

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [apiKey, setApiKey] = useState('');
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(null);
  const [closeUpOpen, setCloseUpOpen] = useState(false);

  const contextValue = useMemo(
    () => ({
      apiKey,
      setApiKey,
      data,
      setData,
      selected,
      setSelected,
      closeUpOpen,
      setCloseUpOpen,
    }),
    [
      apiKey,
      setApiKey,
      data,
      setData,
      selected,
      setSelected,
      closeUpOpen,
      setCloseUpOpen,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
