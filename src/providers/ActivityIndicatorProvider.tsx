import React, { ReactElement, createContext, useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTodos } from '../api/TanStack/providers/TodosProvider';

const ActivityIndicatorContext = createContext({});

export function useActivityIndicator() {
  return useContext(ActivityIndicatorContext);
}

export const ActivityIndicatorProvider = ({ children }: { children: ReactElement }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { isLoading: todosIsLoading } = useTodos();

  return (
    <ActivityIndicatorContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading || todosIsLoading ? <ActivityIndicator /> : children}
    </ActivityIndicatorContext.Provider>
  );
};
