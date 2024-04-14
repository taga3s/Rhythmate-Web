import { Link } from "@tanstack/react-router";

export const SessionTimeoutPresenter = () => {
  return (
    <div className="flex flex-col">
      <span>セッションがタイムアウトしました。</span>
      <span>
        <Link to="/login" className="text-rhyth-blue font-bold">
          こちら
        </Link>
        からサインインできます。
      </span>
    </div>
  );
};
