import { useQuery } from "@tanstack/react-query";
import axios from "axios";


interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}


const useTodos = () => {
    const fetchData = () =>
       axios
         .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
         .then((res) => res.data);
    const todos = useQuery<Todo[], Error>({
     queryKey: ["todos"],
     queryFn: fetchData,
    //  staleTime: 60 * 1000,

  })

    return todos;

}

export default useTodos
