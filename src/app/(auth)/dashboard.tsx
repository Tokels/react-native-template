import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAuth } from '../../api/context/providers/AuthProvider';

export default function DashboardAuthPage() {
  const { handleLogout } = useAuth();
  return (
    <View>
      <Text>Welcome to the Dashboard</Text>
      <Text>You are authenticated</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
