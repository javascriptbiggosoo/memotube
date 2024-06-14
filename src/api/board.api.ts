import { IPost } from "../types";
import axiosInstance from "./axiosInstance";

export const createPost = async (newPost: IPost) => {
  const response = await axiosInstance.post("/posts", newPost);
  return response.data;
};

interface IGetPostsResponse {
  posts: IPost[];
  totalPosts: number;
}
export const getPosts = async (page: number, limit: number) => {
  const response = await axiosInstance.get<IGetPostsResponse>(
    `/posts?page=${page}&limit=${limit}`
  );
  return response.data;
};

export const getPost = async (id: string) => {
  const response = await axiosInstance.get<IPost>(`/posts/${id}`);
  return response.data;
};

export const deletePost = async (id: string) => {
  const response = await axiosInstance.delete(`/posts/${id}`);
  return response.data;
};
