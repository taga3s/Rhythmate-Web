import { createLazyFileRoute } from "@tanstack/react-router";
import { SignupPresenter } from "../../features/signup/components/SignupPresenter";

export const Route = createLazyFileRoute("/signup/")({
  component: () => <Login />,
});

const Login = () => {
  return <SignupPresenter />;
};
