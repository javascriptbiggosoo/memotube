import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import { IPost } from "../types";

export const usePost = (postId: string) => {
  const { data } = useQuery<IPost>({
    queryKey: ["post", postId],
    queryFn: () => axiosInstance.get(`/posts/${postId}`),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
  // const likeToggle = () => {};
  // const deletePost = () => {};
  // const editPost = () => {};
  // const addReview = () => {};
  return { postData: data };
};
