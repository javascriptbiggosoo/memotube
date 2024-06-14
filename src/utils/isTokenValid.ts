import { jwtDecode } from "jwt-decode";

export const isTokenValid = (token: string | null): boolean => {
  if (!token) return false;

  try {
    const { exp } = jwtDecode<{ exp: number }>(token);
    if (Date.now() >= exp * 1000) {
      return false; // 토큰이 만료됨
    }
    return true; // 토큰이 유효함
  } catch (error) {
    return false; // 토큰 해독 실패
  }
};
