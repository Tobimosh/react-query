import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "./constants";
import todoService, { Todo } from "../services/todoService";
import APIClient from "../services/apiClient";

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodos = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,
    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();
      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      // Approach 1: Invalidating the cache
      // so we are basically trying to tell react-query that what we have in the cache is invalid it should fetch new data from the backend
      // this approach doesnt work with JSON placeholders.
      // queryClient.invalidateQueries({
      //   queryKey: ["todos"]
      // })

      // Approach 2: updating the cache directly
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodos;
