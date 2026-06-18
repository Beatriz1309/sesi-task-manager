import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Task, mockTasks } from '../types';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const task = mockTasks.find(t => t.id === id);

  if (!task) {
    return (
      <View style={styles.container}>
        <Text>atividade diferenciada com foco em back-end, desenvolvida em React Native</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      <Stack.Screen
        options={{
          headerTitle: task.title, // 🔥 título dinâmico
        }}
      />

      <View style={styles.card}>
        <Text>{task.category}</Text>
        <Text>{task.title}</Text>
        <Text>{task.date}</Text>
        <Text>{task.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 10 }
});