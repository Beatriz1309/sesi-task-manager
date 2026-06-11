import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';

export interface Task {
  id: string;
  title: string;
  date: string;
  category: 'Trabalho' | 'Prova' | 'Atividade';
  description: string;
}

const mockTasks: Task[] = [
  { id: '1', title: 'Prova de PPDM', date: '15/06/2026', category: 'Prova', description: 'Prepare-se para a prova de PPDM revisando os principais conceitos e praticando exercícios anteriores.' },
  { id: '2', title: 'Entrega de BCD', date: '18/06/2026', category: 'Trabalho', description: 'Entrega do projeto de BCD com as especificações fornecidas.' },
  { id: '3', title: 'Exercício de React Native', date: '20/06/2026', category: 'Atividade', description: 'Desenvolver uma aplicação simples em React Native para praticar os conceitos aprendidos.' },
];

export default function DetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  const task = mockTasks.find(t => t.id === id);

  if (!task) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Erro' }} />
        <Text style={styles.errorText}>Tarefa não encontrada!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      <Stack.Screen 
        options={{ 
          headerShown: true,
          headerTitle: 'Detalhes da Tarefa',
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => router.replace('/(tabs)/index.tsx')} 
              style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center' }}
            >
              <Text style={{ color: '#007AFF', fontSize: 22, marginRight: 4 }}>←</Text>
              <Text style={{ color: '#007AFF', fontSize: 16, fontWeight: 'bold' }}>Voltar</Text>
            </TouchableOpacity>
          ),
        }} 
      />

      <View style={styles.card}>
        <Text style={styles.category}>{task.category.toUpperCase()}</Text>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.date}>Prazo de entrega: {task.date}</Text>
        <Text style={styles.description}>{task.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20, justifyContent: 'center', alignItems: 'center' },
  card: { backgroundColor: '#fff', padding: 24, borderRadius: 12, elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 6, width: '100%', maxWidth: 600 },
  category: { fontSize: 12, fontWeight: 'bold', color: '#007AFF', marginBottom: 8 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 12 },
  date: { fontSize: 14, color: '#666', marginBottom: 16 },
  description: { fontSize: 15, color: '#444', lineHeight: 22 },
  errorText: { fontSize: 16, color: 'red', textAlign: 'center' }
});