import { LoginForm } from "./LoginForm";

export const LoginPresenter = () => {
  return (
    <figure className="flex flex-col items-center py-16">
      <img className="w-56 py-2 inline object-center" src="/logo-long.svg" alt="rhythmateのロゴ" />
      <LoginForm />
    </figure>
  );
};
