import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  Email: string;
  Password: string;
}

export default function LoginForm() {
  const { register } = useForm<IFormInput>();
  return (
    <form>
      <TextField
        {...register("Email", { required: "Email is required" })}
        label="이메일"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...register("Password", { required: "Password is required" })}
        label="비밀번호"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
    </form>
  );
}
