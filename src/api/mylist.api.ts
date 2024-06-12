import axiosInstance from "../api/axiosInstance";
import { IMyMemo } from "../types";

export const createMylist = async (newMyMemo: IMyMemo) => {
  const response = await axiosInstance.post("/mylist", newMyMemo);
  return response.data;
};

export const getMylist = async () => {
  const response = await axiosInstance.get("/mylist");
  return response.data;
};

export const getMylistItem = async (id: string) => {
  const response = await axiosInstance.get(`/mylist/${id}`);
  return response.data;
};

export const deleteMylist = async (id: string) => {
  const response = await axiosInstance.delete(`/mylist/${id}`);
  return response.data;
};
