/* eslint-disable @typescript-eslint/no-floating-promises */
import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { Todo } from '../interface';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createTodo, getTodos } from '../todos';
import { useToast } from '../../../providers/ToastProvider';

type TodosProps = {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
  addTodo: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  todos: Todo[];
};

const TodosContext = createContext<Partial<TodosProps>>({});

export function useTodos() {
  return useContext(TodosContext);
}

export const TodosProvider = ({ children }: { children: ReactElement }) => {
  const [todo, setTodo] = useState('');
  const { setToast } = useToast();

  const queryClient = useQueryClient();

  const {
    data: todos,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  const addMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: (todo) => {
      queryClient.setQueryData(['todos'], (oldData: Todo[]) => oldData.unshift(todo!) && oldData);
      setToast!((prevState) => ({ ...prevState, success: 'Successfully added todo!' }));
    },
    onError: () => {
      setToast!((prevState) => ({ ...prevState, error: 'Something happened... please try again' }));
    },
  });

  const addTodo = () => {
    addMutation.mutate(todo);
  };

  return (
    <TodosContext.Provider
      value={{
        todo,
        setTodo,
        addTodo,
        isLoading,
        isSuccess,
        todos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
