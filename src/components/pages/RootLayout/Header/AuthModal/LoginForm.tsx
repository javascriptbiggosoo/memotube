import { Button, TextField } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios"; // axios import 추가
import { setItem } from "../../../../../utils/localStorage";
import axiosInstance from "../../../../../api/axiosInstance";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "../../../../../atoms/userAtoms";

interface IFormInput {
  email: string;
  password: string;
}

interface ILoginFormProps {
  handleClose: () => void;
  mode: "login" | "register";
}

interface IAuthResponse {
  message: string;
  token: string;
  email: string;
}

export default function LoginForm({ mode, handleClose }: ILoginFormProps) {
  const { register, formState, handleSubmit, setError } = useForm<IFormInput>();
  const setCurrentUser = useSetRecoilState(currentUserState);

  const onSubmit: SubmitHandler<IFormInput> = async ({
    email,
    password,
  }: IFormInput) => {
    try {
      const response = await axiosInstance.post<IAuthResponse>(
        `http://localhost:8080/auth/${mode}`,
        {
          email,
          password,
        }
      );
      console.log("res: " + response);
      if (response.status === 422 || response.status === 401) {
        console.log(response);
        alert("Authentication failed!");
        throw new Error("Authentication failed!");
      }

      if (mode === "register") {
        alert("회원가입이 완료되었습니다.");
        return;
      }
      const data = response.data;
      setCurrentUser({ email: data.email });
      // alert("로그인 성공!" + data.email);
      setItem("token", data.token);

      handleClose();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message || "Authentication failed!");
        setError("email", {
          message: error.response.data.message || "Authentication failed!",
        });
      } else if (error instanceof Error) {
        alert(error.message);
        setError("email", { message: error.message });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("email", { required: "Email is required" })}
        label="이메일"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        defaultValue="tbs01215@gmail.com"
      />
      <TextField
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
          pattern: {
            value: /^[a-zA-Z0-9]+$/,
            message: "Password must contain only letters and numbers",
          },
        })}
        label="비밀번호"
        type="password"
        variant="outlined"
        fullWidth
        defaultValue="aaaaaa"
        margin="normal"
        error={!!formState.errors.password}
        helperText={
          formState.errors.password ? formState.errors.password.message : ""
        }
      />

      <SubmitButton
        type="submit"
        variant="contained"
        disabled={formState.isSubmitting}
      >
        {formState.isSubmitting
          ? "제출 중..."
          : mode === "login"
          ? "로그인"
          : "회원가입"}
      </SubmitButton>
    </form>
  );
}

const SubmitButton = styled(Button)`
  /* 스타일우선순위 높이기 */
  && {
    margin-top: 16px;
    width: 100%;
  }
`;
