import axiosInstance from "../api/axiosInstance";
import { IMylistItem } from "../types";

export const createMylist = async (newMyMemo: IMylistItem) => {
  const response = await axiosInstance.post("/mylist", newMyMemo);
  return response.data;
};

export const getMylist = async () => {
  const response = await axiosInstance.get("/mylist");
  return response.data;
};

export const getMylistItem = async (mylistId: string) => {
  const response = await axiosInstance.get(`/mylist/${mylistId}`);
  return response.data;
};

export const deleteMylist = async (mylistId: string) => {
  const response = await axiosInstance.delete(`/mylist/${mylistId}`);
  return response.data;
};
