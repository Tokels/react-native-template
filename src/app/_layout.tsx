import React, { useEffect } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';
import { ToastProvider } from '../providers/ToastProvider';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { TodosProvider } from '../api/TanStack/providers/TodosProvider';
import { ThemeProvider } from '../providers/ThemeProvider';
import AuthProvider, { useAuth } from '../providers/AuthProvider';
import { TokenProvider } from '../api/TanStack/providers/TokenProvider';

const queryClient = new QueryClient();

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TokenProvider>
        <AuthProvider>
          <ThemeProvider>
            <ToastProvider>
              <TodosProvider>
                <InitialLayout />
              </TodosProvider>
            </ToastProvider>
          </ThemeProvider>
        </AuthProvider>
      </TokenProvider>
    </QueryClientProvider>
  );
}

function InitialLayout() {
  const { accessToken } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (accessToken && !inAuthGroup) {
      router.replace('/(auth)/dashboard');
    } else if (!accessToken && inAuthGroup) {
      router.replace('/(public)/login');
    }
  }, [accessToken]);

  return <Slot />;
}
