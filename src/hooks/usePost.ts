import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { IMylistItem, IPost } from "../types";
import {
  fethCreatePost,
  fetchGetPost,
  fetchDeletePost,
  fetchLikePost,
  fetchUnlikePost,
} from "../api/board.api";
import { queryClient } from "../api/queryClient";

export const usePost = (postId: string) => {
  const { data } = useQuery<IPost>({
    queryKey: ["post", postId],
    queryFn: fetchGetPost.bind(null, postId),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
  const { mutate } = useMutation({
    mutationFn: (postId: string) => fetchDeletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"] as InvalidateQueryFilters);
    },
  });

  const deletePost = (postId: string) => {
    mutate(postId);
  };

  const { mutate: likeMutate } = useMutation({
    mutationFn: (postId: string) => fetchLikePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries(["post", postId] as InvalidateQueryFilters);
    },
  });

  const { mutate: unlikeMutate } = useMutation({
    mutationFn: (postId: string) => fetchUnlikePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries(["post", postId] as InvalidateQueryFilters);
    },
  });
  const toggleLike = (liked: boolean) => {
    if (liked) {
      unlikeMutate(postId);
    } else {
      likeMutate(postId);
    }
  };
  // const editPost = () => {};
  // const addReview = () => {};
  return { postData: data, deletePost, toggleLike };
};

export const useAddPost = () => {
  const { mutate } = useMutation({
    mutationFn: (newPost: IPost) => fethCreatePost(newPost),
    onSuccess: () => {
      // 성공시
      queryClient.invalidateQueries(["posts"] as InvalidateQueryFilters);
    },
  });

  interface IAddPostProps {
    mylistItem: IMylistItem;
    title: string;
    author: string;
    category?: string;
  }
  const addPost = ({ mylistItem, title, author, category }: IAddPostProps) => {
    const newPost: IPost = {
      id: crypto.randomUUID(),
      thumbnail: mylistItem.thumbnail,
      title,
      content: mylistItem.content,
      author,
      category,
      likes: {
        likeCount: 0,
        likedUser: [],
      },
      createdAt: new Date().getTime(),
    };
    mutate(newPost);
  };

  return { addPost };
};
