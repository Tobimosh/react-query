import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios"


export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {

    pageSize: number;
}

const usePost = (query: PostQuery) => {
    
    const post = useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({pageParam }) =>
    axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _start: (pageParam -1) *  query.pageSize,
                _limit: query.pageSize
            }
        })
        .then((res) => res.data),

    // staleTime: 60 * 1000
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {

        return lastPage.length > 0  ? allPages.length + 1 : undefined;
    }

    
  })

  return post;
}

export default usePost
