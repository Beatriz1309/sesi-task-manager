// types.ts
export interface Task {
  id: string;
  title: string;
  date: string;
  category: 'Trabalho' | 'Prova' | 'Atividade';
  description: string;
}

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Prova de PPDM',
    date: '15/06/2026',
    category: 'Prova',
    description: 'Prepare-se para a prova de PPDM revisando os principais conceitos e praticando exercícios anteriores.'
  },
  {
    id: '2',
    title: 'Entrega de BCD',
    date: '18/06/2026',
    category: 'Trabalho',
    description: 'Entrega do projeto de BCD com as especificações fornecidas.'
  },
  {
    id: '3',
    title: 'Exercício de React Native',
    date: '20/06/2026',
    category: 'Atividade',
    description: 'Desenvolver uma aplicação simples em React Native.'
  },
  {
    id: '4',
    title: 'Atividade de Back-end',
    date: '25/06/2026',
    category: 'Atividade',
    description: 'Desenvolver uma API RESTful utilizando Node.js e Express, com autenticação JWT e integração com um banco de dados MongoDB.'
  }
];