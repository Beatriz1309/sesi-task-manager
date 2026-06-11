import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações do Aluno</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>Seu Nome Aqui</Text>
        
        <Text style={styles.label}>Curso:</Text>
        <Text style={styles.value}>Desenvolvimento de Sistemas</Text>
        
        <Text style={styles.label}>Unidade:</Text>
        <Text style={styles.value}>SESI / SENAI</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20, paddingTop: 60 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 8, elevation: 2 },
  label: { fontSize: 14, color: '#888', marginTop: 10 },
  value: { fontSize: 16, fontWeight: '600', color: '#222' }
});