import React, { createContext, useState, useMemo } from 'react';
import useFetch from '../hooks/useFetch';

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [apiKey, setApiKey] = useState('');
  // const [data, setData] = useState(null);
  const [url, setUrl] = useState('');
  const [selected, setSelected] = useState(null);
  const [closeUpOpen, setCloseUpOpen] = useState(false);
  const data = useFetch(url);
  const contextValue = useMemo(
    () => ({
      apiKey,
      setApiKey,
      data,
      selected,
      setSelected,
      closeUpOpen,
      setCloseUpOpen,
      url,
      setUrl
    }),
    [
      apiKey,
      setApiKey,
      data,
      // setData,
      selected,
      setSelected,
      closeUpOpen,
      setCloseUpOpen,
      url,
      setUrl,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
