import React from 'react';
import { Text, View } from 'react-native';
import Todos from '../../components/Todos';

export default function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
      <Todos />
    </View>
  );
}
