/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import axios from 'axios';
import { Todo } from './interface';
const API_URL = 'https://dummyjson.com';

export const getTodos = async (): Promise<Todo[]> => {
  const result = await axios.get(`${API_URL}/todos?limit=7`);
  return result.data.todos;
};

export const createTodo = async (todo: string): Promise<Todo | undefined> => {
  try {
    const newTodo = {
      todo,
      completed: false,
      userId: 5,
    };
    const headers = { 'Content-Type': 'application/json' };
    const result = await axios.post(`${API_URL}/todos/add`, JSON.stringify(newTodo), { headers });
    return { ...result.data, id: Math.floor(Math.random() * 10000) };
  } catch (err) {
    console.error(err);
  }
  return;
};
