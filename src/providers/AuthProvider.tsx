import React, { ReactElement, createContext, useContext, useEffect, useState } from 'react';

type AuthProps = {
  token: string;
  initialized: boolean;
};

const AuthContext = createContext<Partial<AuthProps>>({});

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: { children: ReactElement }) {
  const [token, setToken] = useState('');
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const loadToken = () => {
      setToken('valid-token');
      setInitialized(true);
    };
    loadToken();
  }, []);

  return <AuthContext.Provider value={{ token, initialized }}>{children}</AuthContext.Provider>;
}
