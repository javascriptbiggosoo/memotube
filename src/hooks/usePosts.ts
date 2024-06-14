import { useMutation, useQuery } from "@tanstack/react-query";
import { createPost, getPosts } from "../api/board.api";
import { IPost } from "../types";
import { POSTS_PER_PAGE } from "../constants/pagination";

interface IAddPostProps {
  page?: number;
  limit?: number;
}
export const usePosts = ({
  page = 1,
  limit = POSTS_PER_PAGE,
}: IAddPostProps) => {
  // 추후 페이지 기능은 따로 수정
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts.bind(null, page, limit),
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

  return {
    postsData: data?.posts,
    AddPost,
    isPostsLoading: isLoading,
    totalPosts: data?.totalPosts,
  };
};
