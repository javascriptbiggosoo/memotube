import { useMutation, useQuery } from "@tanstack/react-query";
import { createPost, getPosts } from "../api/board.api";
import { IPost } from "../types";

export const usePosts = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
  const { mutate } = useMutation({
    mutationFn: (newPost: IPost) => createPost(newPost),
    onSuccess: () => {
      // 성공시
    },
  });
  const AddPost = (newPost: IPost) => {
    mutate(newPost);
  };

  return { postsData: data, AddPost };
};
