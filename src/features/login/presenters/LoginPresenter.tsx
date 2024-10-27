import { LoginForm } from "../components/LoginForm";

export const LoginPresenter = () => {
  return (
    <div className="flex flex-col items-center py-16">
      <picture className="my-4 w-[224px] h-[60px]">
        <source srcSet="/logo-long.webp" type="image/webp" />
        <source srcSet="/logo-long.png" type="image/png" />
        <img alt="rhythmateのロゴ" />
      </picture>
      <LoginForm />
    </div>
  );
};
