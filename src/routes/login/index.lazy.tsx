import { createLazyFileRoute } from "@tanstack/react-router";
import { CopyrightLayout } from "../../features/common/components/layouts";
import { LoginPresenter } from "../../features/login/components/LoginPresenter";

export const Route = createLazyFileRoute("/login/")({
  component: () => <Login />,
});

const Login = () => {
  return (
    <CopyrightLayout>
      <LoginPresenter />
    </CopyrightLayout>
  );
};
