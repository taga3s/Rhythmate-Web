import { Image } from "@unpic/react";
import { LoginForm } from "../components/LoginForm";

export const LoginPresenter = () => {
  return (
    <figure className="flex flex-col items-center py-16">
      <div className="my-4">
        <Image width={224} height={60} src="/logo-long.svg" alt="rhythmateのロゴ" />
      </div>
      <LoginForm />
    </figure>
  );
};
