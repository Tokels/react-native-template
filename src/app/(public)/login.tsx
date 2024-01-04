import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAuth } from '../../providers/AuthProvider';

export default function LoginPage() {
  const { handleLogin } = useAuth();
  return (
    <View>
      <Text>Login</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
