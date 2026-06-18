import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Task, mockTasks } from './types';

export default function TasksScreen() {
  const router = useRouter();

  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [newTask, setNewTask] = useState('');

  // 🔥 LOGOUT
  const handleLogout = () => {
    router.replace('/login');
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const addTask = () => {
    if (!newTask) return;

    const nova: Task = {
      id: Date.now().toString(),
      title: newTask,
      date: 'Hoje',
      category: 'Atividade',
      description: 'Criada pelo usuário'
    };

    setTasks([nova, ...tasks]);
    setNewTask('');
  };

  const renderItem = ({ item }: { item: Task }) => {
    const categoryStyle = styles[item.category as keyof typeof styles];

    return (
      <TouchableOpacity
        style={styles.taskCard}
        onPress={() => router.push(`/details/${item.id}` as any)}
        onLongPress={() =>
          Alert.alert("Excluir", "Deseja excluir?", [
            { text: "Cancelar" },
            { text: "Sim", onPress: () => deleteTask(item.id) }
          ])
        }
      >
        <View>
          <Text style={styles.taskTitle}>{item.title}</Text>
          <Text style={styles.taskDate}>📅 {item.date}</Text>
        </View>
        <Text style={[styles.badge, categoryStyle]}>
          {item.category}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Sesi Task Manager</Text>

      {/* 🔥 BOTÃO LOGOUT */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Nova tarefa..."
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
      />

      <TouchableOpacity onPress={addTask} style={styles.button}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 40
  },

  // 🔥 LOGOUT STYLE
  logoutButton: {
    backgroundColor: '#ff3b30',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginBottom: 10
  },

  logoutText: {
    color: '#fff',
    fontWeight: 'bold'
  },

  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  },

  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  taskCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  taskTitle: { fontSize: 16, fontWeight: '600' },
  taskDate: { fontSize: 14, color: '#666' },

  badge: {
    padding: 5,
    borderRadius: 4,
    fontWeight: 'bold'
  },

  Prova: { backgroundColor: '#ffdde1' },
  Trabalho: { backgroundColor: '#e2fac8' },
  Atividade: { backgroundColor: '#e1f5fe' },
});