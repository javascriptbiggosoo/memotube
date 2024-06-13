import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { currentUserState } from "../atoms/userAtoms";
import { setItem } from "../utils/localStorage";
import {
  ILoginResponse,
  IFormInput,
  fetchLogin,
  fetchSignup,
} from "../api/auth.api";

// 비즈니스 로직 분리
const useAuth = () => {
  const setCurrentUser = useSetRecoilState(currentUserState);
  const navigate = useNavigate();

  const loginMutation = useMutation<ILoginResponse, unknown, IFormInput>({
    mutationFn: fetchLogin,
    onSuccess: (data, variables) => {
      setCurrentUser({ email: variables.email });
      setItem("token", data.token);
      alert(`${variables.email}님 로그인 성공!`);
      navigate("/");
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message || "Authentication failed!");
      } else if (error instanceof Error) {
        alert(error.message);
      }
    },
  });

  const signupMutation = useMutation({
    mutationFn: fetchSignup,
    onSuccess: (_, variables) => {
      alert(`${variables.email}님 회원가입이 완료되었습니다.`);
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message || "Authentication failed!");
      } else if (error instanceof Error) {
        alert(error.message);
      }
    },
  });

  const handleLogin = (email: string, password: string) => {
    loginMutation.mutate({ email, password });
  };

  const handleSignup = (email: string, password: string) => {
    signupMutation.mutate({ email, password });
  };

  return {
    handleLogin,
    handleSignup,
    isLoggingIn: loginMutation.isSuccess,
    isSigningUp: signupMutation.isSuccess,
  };
};

export default useAuth;
