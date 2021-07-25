import { createContext, useContext, useState } from 'react';

// Create Store
interface GlobalContextProps {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = createContext<GlobalContextProps>({
  token: '',
  setToken: (token) => '',
});

// Global Store Provider
interface GlobalContextProviderProps {
  children: JSX.Element;
}

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [token, setToken] = useState('');

  return (
    <GlobalContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use Global Store
export const useGlobalContext = () => useContext(GlobalContext);
