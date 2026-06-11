import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// 1. Definição da interface Task conforme o requisito
export interface Task {
  id: string;
  title: string;
  date: string;
  category: 'Trabalho' | 'Prova' | 'Atividade';
  description: string;
}

// 2. Mock de dados local para a FlatList
const mockTasks: Task[] = [
  { id: '1', title: 'Prova de PPDM', date: '15/06/2026', category: 'Prova', description: 'Prepare-se para a prova de PPDM revisando os principais conceitos e praticando exercícios anteriores.' },
  { id: '2', title: 'Entrega de BCD', date: '18/06/2026', category: 'Trabalho', description: 'Entrega do projeto de BCD com as especificações fornecidas.' },
  { id: '3', title: 'Exercício de React Native', date: '20/06/2026', category: 'Atividade', description: 'Desenvolver uma aplicação simples em React Native para praticar os conceitos aprendidos.' },
];

export default function HomeScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: Task }) => {
    // Mapeamento dinâmico seguro de estilos para o TypeScript
    const categoryStyle = styles[item.category as keyof typeof styles] || styles.Atividade;

    return (
      <TouchableOpacity 
        style={styles.taskCard}
      onPress={() => router.push('/details/' + item.id as any)}
      >
        <View>
          <Text style={styles.taskTitle}>{item.title}</Text>
          <Text style={styles.taskDate}>📅 {item.date}</Text>
        </View>
        <Text style={[styles.badge, categoryStyle]}>{item.category}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Sesi Task Manager</Text>
      <FlatList
        data={mockTasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, marginTop: 40, color: '#333' },
  listContainer: { paddingBottom: 20 },
  taskCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  taskTitle: { fontSize: 16, fontWeight: '600', color: '#222' },
  taskDate: { fontSize: 14, color: '#666', marginTop: 4 },
  badge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, fontSize: 12, overflow: 'hidden', fontWeight: 'bold' },
  Prova: { backgroundColor: '#ffdde1', color: '#d9383a' },
  Trabalho: { backgroundColor: '#e2fac8', color: '#4d8412' },
  Atividade: { backgroundColor: '#e1f5fe', color: '#0288d1' },
});