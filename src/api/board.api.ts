import { IPost } from "../types";
import axiosInstance from "./axiosInstance";

export const fethCreatePost = async (newPost: IPost) => {
  const response = await axiosInstance.post("/posts", newPost);
  return response.data;
};

interface IGetPostsResponse {
  posts: IPost[];
  totalPosts: number;
}
export const fetchGetPosts = async (page: number, limit: number) => {
  const response = await axiosInstance.get<IGetPostsResponse>(
    `/posts?page=${page}&limit=${limit}`
  );
  return response.data;
};

export const fetchGetPost = async (id: string) => {
  const response = await axiosInstance.get<IPost>(`/posts/${id}`);
  return response.data;
};

export const fetchDeletePost = async (id: string) => {
  const response = await axiosInstance.delete(`/posts/${id}`);
  return response.data;
};

export const fetchLikePost = async (id: string) => {
  const response = await axiosInstance.post(`/posts/${id}/like`);
  return response.data;
};

export const fetchUnlikePost = async (id: string) => {
  const response = await axiosInstance.post(`/posts/${id}/unlike`);
  return response.data;
};
