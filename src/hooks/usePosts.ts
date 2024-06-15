import { useQuery } from "@tanstack/react-query";
import { fetchGetPosts } from "../api/board.api";
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
    queryKey: ["posts", page, limit],
    queryFn: fetchGetPosts.bind(null, page, limit),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });

  return {
    postsData: data?.posts,
    isPostsLoading: isLoading,
    totalPosts: data?.totalPosts,
  };
};
