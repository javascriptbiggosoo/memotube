import { Button, TextField } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios"; // axios import 추가
import { setItem } from "../../../../../utils/localStorage";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "../../../../../atoms/userAtoms";
import { login, signup } from "../../../../../api/auth.api";

interface IFormInput {
  email: string;
  password: string;
}

interface ILoginFormProps {
  handleClose: () => void;
  mode: "login" | "signup";
}

export default function LoginForm({ mode, handleClose }: ILoginFormProps) {
  const { register, formState, handleSubmit, setError } = useForm<IFormInput>();
  const setCurrentUser = useSetRecoilState(currentUserState);

  const onSubmit: SubmitHandler<IFormInput> = async ({
    email,
    password,
  }: IFormInput) => {
    if (mode === "login") {
      try {
        const { data, status } = await login({ email, password });

        if (status === 422 || status === 401) {
          alert("Authentication failed!");
          throw new Error("Authentication failed!");
        }
        // console.log(data);

        setCurrentUser({ email });
        alert(`${email}님 로그인 성공!`);
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
    } else if (mode === "signup") {
      try {
        await signup({ email, password });

        alert(`${email}님 회원가입이 완료되었습니다.`);
        return;
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
