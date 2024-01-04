import React from 'react';
import { Stack } from 'expo-router';

export default function InsideLayout() {
  return (
    <Stack>
      <Stack.Screen name="dashboard" options={{ headerTitle: 'Dashboard' }} />
    </Stack>
  );
}
