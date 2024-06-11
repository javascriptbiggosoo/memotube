import { IPost } from "../types";
import axiosInstance from "./axiosInstance";

export const createPost = async (newPost: IPost) => {
  const response = await axiosInstance.post("/posts", newPost);
  return response.data;
};

export const getPosts = async () => {
  const response = await axiosInstance.get("/posts");
  return response.data;
};

export const getPost = async (id: string) => {
  const response = await axiosInstance.get(`/posts/${id}`);
  return response.data;
};

export const deletePost = async (id: string) => {
  const response = await axiosInstance.delete(`/posts/${id}`);
  return response.data;
};
