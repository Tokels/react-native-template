import React, { useEffect, useState } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
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
  const [token] = useState('valid-token');
  const [initialized] = useState(true);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (!initialized) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (token && !inAuthGroup) {
      router.replace('/(auth)/dashboard');
    } else if (!token && inAuthGroup) {
      router.replace('/(public)/login');
    }
  }, [token, initialized]);

  return <Slot />;
}
