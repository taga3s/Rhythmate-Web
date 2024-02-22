import { useCookies } from "react-cookie";

export const useAuthenticate = () => {
  const [cookies] = useCookies(["access_token"]);
  const accessToken: string = cookies.access_token ?? "";
  return {
    isAuthenticated: accessToken.length !== 0,
  };
};
