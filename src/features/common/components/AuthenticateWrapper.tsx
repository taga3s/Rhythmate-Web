import { useNavigate } from "@tanstack/react-router";
import { useAuthenticate } from "../hooks/useAuthenticate";
import { FC, ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
};

export const AuthenticateWrapper: FC<Props> = ({ children }) => {
  const { data, isSuccess } = useAuthenticate();
  const navigation = useNavigate();

  useEffect(() => {
    if (!data.isAuthenticated) {
      navigation({ to: "/timeout" });
    }
  }, [isSuccess]);

  return <div>{children}</div>;
};
