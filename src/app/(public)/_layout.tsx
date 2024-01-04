import React from 'react';
import { Tabs } from 'expo-router';

export default function InsideLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="dashboard" options={{ headerTitle: 'Dashboard' }} />
      <Tabs.Screen name="login" options={{ headerTitle: 'Login' }} />
      <Tabs.Screen name="register" options={{ headerTitle: 'Create Account' }} />
    </Tabs>
  );
}
