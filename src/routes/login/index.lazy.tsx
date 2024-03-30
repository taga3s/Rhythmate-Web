import { createLazyFileRoute } from "@tanstack/react-router";
import { LoginPresenter } from "../../features/login/components/LoginPresenter";
import { CopyrightLayout } from "../../features/common/components/layouts/CopyrightLayout";

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
