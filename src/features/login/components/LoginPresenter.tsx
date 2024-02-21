import { useForm } from "react-hook-form";

export const LoginPresenter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="text-sm mx-auto p-12 flex flex-col items-center gap-4 font-sans">
      <svg
        className="w-[120px] h-[120px] text-gray-800 dark:text-white mx-auto"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
          clipRule="evenodd"
        />
      </svg>
      <form className="gap-4 flex flex-col items-center" onSubmit={handleSubmit(onsubmit)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">ユーザーネーム</label>
          <input type="email" id="email" className="rounded-full border-2 w-52 h-128 p-3" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">パスワード</label>
          <input type="password" id="password" className="rounded-full border-2 w-52 h-128 p-3" />
        </div>
        <span>
          新しく始めますか？
          <a href="#" className="text-blue-600">
            新規登録
          </a>
        </span>
        <button
          type="submit"
          className="p-10 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
        >
          ログインする
        </button>
      </form>
    </div>
  );
};
