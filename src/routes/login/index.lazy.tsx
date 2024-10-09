import { createLazyFileRoute } from "@tanstack/react-router";
import { BeforeLoginLayout } from "../../features/common/components/layouts";
import { LoginPresenter } from "../../features/login/presenters/LoginPresenter";

export const Route = createLazyFileRoute("/login/")({
  component: () => <Login />,
});

const Login = () => {
  return (
    <BeforeLoginLayout>
      <LoginPresenter />
    </BeforeLoginLayout>
  );
};
