import React, { ReactElement, createContext, useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native';

const ActivityIndicatorContext = createContext({});

export function useActivityIndicator() {
  return useContext(ActivityIndicatorContext);
}

export const ActivityIndicatorProvider = ({ children }: { children: ReactElement }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ActivityIndicatorContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading ? <ActivityIndicator /> : children}
    </ActivityIndicatorContext.Provider>
  );
};
