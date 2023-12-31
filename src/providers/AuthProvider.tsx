import React, { ReactElement, createContext, useContext } from 'react';
import { useToken } from '../api/TanStack/providers/TokenProvider';

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
  const { token, loginToken, deleteToken, registerToken } = useToken();

  const handleLogin = () => {
    loginToken!();
  };

  const handleLogout = () => {
    deleteToken!();
  };

  const handleRegister = () => {
    registerToken!();
  };

  return (
    <AuthContext.Provider value={{ token, handleLogin, handleLogout, handleRegister }}>
      {children}
    </AuthContext.Provider>
  );
}
