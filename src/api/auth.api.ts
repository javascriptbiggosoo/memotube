import axiosInstance from "./axiosInstance";

interface IFormInput {
  email: string;
  password: string;
}

interface IAuthResponse {
  message: string;
  token: string;
}

export const login = async ({ email, password }: IFormInput) => {
  const response = await axiosInstance.post<IAuthResponse>("/auth/login", {
    email,
    password,
  });

  return response;
};

export const signup = async ({ email, password }: IFormInput) => {
  const response = await axiosInstance.post<IAuthResponse>("/auth/signup", {
    email,
    password,
  });

  return response;
};
