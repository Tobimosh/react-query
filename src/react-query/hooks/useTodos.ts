import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "./constants";
import APIClient from "../services/apiClient";
import todoService, { Todo } from "../services/todoService";



const useTodos = () => {
 
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS, // Wrap the query key in an array
    queryFn: todoService.getAll,
    // staleTime: 60 * 1000,
    // keepPreviousData: true,
    // Add any other options or configurations as needed
  });
};

export default useTodos;
