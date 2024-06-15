import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { IMylistItem, IPost } from "../types";
import { createPost, getPost } from "../api/board.api";
import { queryClient } from "../api/queryClient";

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

export const useAddPost = () => {
  const { mutate } = useMutation({
    mutationFn: (newPost: IPost) => createPost(newPost),
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
