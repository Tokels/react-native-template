import React from 'react';
import { Stack } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';
import { ToastProvider } from '../providers/ToastProvider';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { TodosProvider } from '../api/TanStack/providers/TodosProvider';

const queryClient = new QueryClient();

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <TodosProvider>
          <RootLayoutNav />
        </TodosProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
