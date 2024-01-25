import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAuth } from '../../api/context/providers/AuthProvider';

export default function LoginPage() {
  const { handleLogin } = useAuth();
  return (
    <View>
      <Text>Login</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
