import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import usePost from "./hooks/usePost";
import React from "react";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const pageSize = 10;

  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePost(
    { pageSize }
  );
  useEffect(() => {}, []);
  if (isLoading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        disabled={isFetchingNextPage}
        className="btn btn-secondary ms-2 mt-2"
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading" : "Load more"}
      </button>
    </>
  );
};

export default PostList;
