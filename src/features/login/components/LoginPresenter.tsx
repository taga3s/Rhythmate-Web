import { LoginForm } from "./LoginForm";

export const LoginPresenter = () => {
  return (
    <div className="m-16 text-sm mx-auto flex flex-col items-center gap-4">
      <img className="w-48 my-4 inline object-center" src="/logo-long.svg" alt="rhythmateのロゴ" />
      <LoginForm />
    </div>
  );
};
