import { createLazyFileRoute } from "@tanstack/react-router";
import { LoginPresenter } from "../../features/login/components/LoginPresenter";

export const Route = createLazyFileRoute("/login/")({
  component: () => <Login />,
});

const Login = () => {
  return <LoginPresenter />;
};
