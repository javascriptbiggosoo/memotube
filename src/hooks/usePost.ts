import { useQuery } from "@tanstack/react-query";
import { IPost } from "../types";
import { getPost } from "../api/board.api";

export const usePost = (postId: string) => {
  const { data } = useQuery<IPost>({
    queryKey: ["post", postId],
    queryFn: getPost.bind(null, postId),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
  // const likeToggle = () => {};
  // const deletePost = () => {};
  // const editPost = () => {};
  // const addReview = () => {};
  return { postData: data };
};
