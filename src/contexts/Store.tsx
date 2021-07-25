import { createContext, useContext, useState } from 'react';

// Create Store
type StoreProps = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

const Store = createContext<StoreProps>({
  token: '',
  setToken: (token) => '',
});

// Custom hook to use Global context
export const useStore = () => useContext(Store);

// Global context provider
type Props = {
  children: JSX.Element;
};

export const StoreProvider = ({ children }: Props) => {
  const [token, setToken] = useState('');

  return (
    <Store.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </Store.Provider>
  );
};
