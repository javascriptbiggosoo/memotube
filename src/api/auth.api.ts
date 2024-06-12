import axiosInstance from "./axiosInstance";

export interface IFormInput {
  email: string;
  password: string;
}

export interface ILoginResponse {
  message: string;
  token: string;
}

export const login = async ({ email, password }: IFormInput) => {
  const response = await axiosInstance.post<ILoginResponse>("/auth/login", {
    email,
    password,
  });

  return response.data;
};

export const signup = async ({ email, password }: IFormInput) => {
  const response = await axiosInstance.post("/auth/signup", {
    email,
    password,
  });

  return response.data;
};
