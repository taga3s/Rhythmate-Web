import { LoginForm } from "./LoginForm";

export const LoginPresenter = () => {
  return (
    <div className="p-16 mx-auto flex flex-col items-center">
      <img className="w-56 py-2 inline object-center" src="/logo-long.svg" alt="rhythmateのロゴ" />
      <LoginForm />
    </div>
  );
};
