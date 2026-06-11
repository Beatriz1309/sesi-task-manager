

// 1. Definição do tipo da tarefa
export interface Task {
  id: string;
  title: string;
  date: string;
  category: 'Trabalho' | 'Prova' | 'Atividade';
}

// 2. O array de dados (Certifique-se de que a palavra EXPORT está aqui)
export const mockTasks: Task[] = [
  { id: '1', title: 'Prova de PPDM', date: '15/06/2026', category: 'Prova' },
  { id: '2', title: 'Entrega de BCD', date: '18/06/2026', category: 'Trabalho' },
  { id: '3', title: 'Exercício de React Native', date: '20/06/2026', category: 'Atividade' },
];