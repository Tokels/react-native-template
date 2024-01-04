import React from 'react';
import { Slot } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';
import { ToastProvider } from '../providers/ToastProvider';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { TodosProvider } from '../api/TanStack/providers/TodosProvider';
import { ThemeProvider } from '../providers/ThemeProvider';

const queryClient = new QueryClient();

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ToastProvider>
          <TodosProvider>
            <InitialLayout />
          </TodosProvider>
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

function InitialLayout() {
  return <Slot />;
}
