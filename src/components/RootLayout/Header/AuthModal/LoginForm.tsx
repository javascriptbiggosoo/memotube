import { Button, TextField } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface IFormInput {
  Email: string;
  Password: string;
}

export default function LoginForm({ mode }: { mode: "login" | "register" }) {
  const { register, formState, handleSubmit, setError } = useForm<IFormInput>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = async ({
    Email,
    Password,
  }: IFormInput) => {
    try {
      const response = await fetch(`http://localhost:6000/auth/${mode}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email, Password }),
      });

      if (response.status === 422 || response.status === 401) {
        console.log(response);
        throw new Error("Authentication failed!");
      }

      if (!response.ok) {
        throw new Error("Authentication failed!");
      }

      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setError("Email", { message: error.message });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("Email", { required: "Email is required" })}
        label="이메일"
        type="email"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...register("Password", { required: "Password is required" })}
        label="비밀번호"
        type="password"
        variant="outlined"
        fullWidth
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
