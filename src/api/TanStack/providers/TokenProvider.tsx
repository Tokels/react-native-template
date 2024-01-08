/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { ReactElement, createContext, useContext } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { login, initialize, logout, refresh, register } from '../token';

type TokenProps = {
  token: string;
  loginToken: () => void;
  deleteToken: () => void;
  refreshToken: () => void;
  registerToken: () => void;
};

const TokenContext = createContext<Partial<TokenProps>>({});

export function useToken() {
  return useContext(TokenContext);
}

export const TokenProvider = ({ children }: { children: ReactElement }) => {
  const queryClient = useQueryClient();

  const { data: token } = useQuery({
    queryKey: ['token'],
    queryFn: initialize,
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (token) => {
      queryClient.setQueryData(['token'], token);
    },
  });

  const loginToken = () => {
    loginMutation.mutate();
  };

  const deleteMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(['token'], '');
    },
  });

  const deleteToken = () => {
    deleteMutation.mutate();
  };

  const refreshMutation = useMutation({
    mutationFn: refresh,
    onSuccess: (token) => {
      queryClient.setQueryData(['token'], token);
    },
  });

  const refreshToken = () => {
    refreshMutation.mutate();
  };

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (token) => {
      queryClient.setQueryData(['token'], token);
    },
  });

  const registerToken = () => {
    registerMutation.mutate();
  };

  return (
    <TokenContext.Provider
      value={{
        token,
        loginToken,
        deleteToken,
        refreshToken,
        registerToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};
