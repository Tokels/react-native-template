import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAuth } from '../../api/context/providers/AuthProvider';

export default function RegisterPage() {
  const { handleRegister } = useAuth();
  return (
    <View>
      <Text>Register</Text>
      <Button title="Create Free Account" onPress={handleRegister} />
    </View>
  );
}
