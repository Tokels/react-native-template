import React, { ReactElement, createContext, useContext, useEffect, useState } from 'react';
import { authorize } from '../api/Auth';

type AuthProps = {
  token: string;
  initialized: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
  handleRegister: () => void;
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
      setInitialized(true);
    };
    loadToken();
  }, []);

  const handleLogin = () => {
    const token = authorize();
    setToken(token);
  };

  const handleLogout = () => {
    setToken('');
  };

  const handleRegister = () => {
    const token = authorize();
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ token, initialized, handleLogin, handleLogout, handleRegister }}>
      {children}
    </AuthContext.Provider>
  );
}
