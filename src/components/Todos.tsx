import React from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { useTodos } from '../api/TanStack/providers/TodosProvider';
import { ActivityIndicatorProvider } from '../providers/ActivityIndicatorProvider';

export default function Todos() {
  const { todos, addTodo, todo, setTodo } = useTodos();
  return (
    <View>
      <Text>Todos</Text>
      <TextInput placeholder="New Todo" onChangeText={setTodo} value={todo} />
      <Button title="Add Todo" onPress={addTodo} />
      <ActivityIndicatorProvider>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <View>
              <Text>{item.todo}</Text>
            </View>
          )}
        />
      </ActivityIndicatorProvider>
    </View>
  );
}
