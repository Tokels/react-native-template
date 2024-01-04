import React, { useEffect } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';
import { ToastProvider } from '../providers/ToastProvider';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { TodosProvider } from '../api/TanStack/providers/TodosProvider';
import { ThemeProvider } from '../providers/ThemeProvider';
import AuthProvider, { useAuth } from '../providers/AuthProvider';

const queryClient = new QueryClient();

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function RootLayout() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <ToastProvider>
            <TodosProvider>
              <InitialLayout />
            </TodosProvider>
          </ToastProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

function InitialLayout() {
  const { token, initialized } = useAuth();
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
