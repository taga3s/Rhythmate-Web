import { LoginForm } from "./LoginForm";

export const LoginPresenter = () => {
  return (
    <div className="m-16 mx-auto flex flex-col items-center gap-8">
      <img className="w-56 my-4 inline object-center" src="/logo-long.svg" alt="rhythmateのロゴ" />
      <LoginForm />
    </div>
  );
};
