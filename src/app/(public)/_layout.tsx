import React from 'react';
import { Stack } from 'expo-router';

export default function InsideLayout() {
  return (
    <Stack>
      <Stack.Screen name="dashboard" options={{ headerTitle: 'Dashboard' }} />
      <Stack.Screen name="login" options={{ headerTitle: 'Login' }} />
      <Stack.Screen name="register" options={{ headerTitle: 'Create Account' }} />
    </Stack>
  );
}
