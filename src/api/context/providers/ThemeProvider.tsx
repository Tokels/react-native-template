import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type Theme = 'theme-dark' | 'theme-light';

type ThemeProps = {
  theme: string;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

const ThemeContext = createContext<Partial<ThemeProps>>({});

export function useTheme() {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<Theme>('theme-light');

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
