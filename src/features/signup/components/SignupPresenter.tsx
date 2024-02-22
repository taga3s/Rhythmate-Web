import { useForm } from "react-hook-form";
import { TSignupValidationSchema, signupValidationSchema } from "../libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormErrorMsg } from "../../common/components/utils/FormErrorMsg";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast.custom((t) => (
    <div
      id="toast-simple"
      className={`${
        t.visible ? "animate-slide-in-top" : "animate-slide-out-top"
      } flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-300 rounded-lg shadow  space-x`}
      role="alert"
    >
      <svg
        className="w-6 h-6 text-green-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <div className="ps-4 text-sm font-normal">新規登録に成功しました</div>
    </div>
  ));

export const SignupPresenter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignupValidationSchema>({
    mode: "onBlur",
    resolver: zodResolver(signupValidationSchema),
  });

  const onsubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="m-16 text-sm mx-auto flex flex-col items-center gap-4">
      <img className="w-48 my-4 inline object-center" src="/logo-long.svg" alt="rhythmateのロゴ" />
      <svg
        className="w-[120px] h-[120px] text-gray-800 mx-auto"
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
          <label htmlFor="name">ユーザー名</label>
          <input type="text" id="name" className="rounded-full border-2 w-52 h-128 p-3" {...register("name")} />
          {errors.name && <FormErrorMsg msg={errors.name.message ?? ""} />}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">メールアドレス</label>
          <input type="email" id="email" className="rounded-full border-2 w-52 h-128 p-3" {...register("email")} />
          {errors.email && <FormErrorMsg msg={errors.email.message ?? ""} />}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            className="rounded-full border-2 w-52 h-128 p-3"
            {...register("password")}
          />
          {errors.password && <FormErrorMsg msg={errors.password.message ?? ""} />}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">パスワード（再確認）</label>
          <input
            type="password"
            id="password"
            className="rounded-full border-2 w-52 h-128 p-3"
            {...register("passwordConfirmation")}
          />
          {errors.passwordConfirmation && <FormErrorMsg msg={errors.passwordConfirmation.message ?? ""} />}
        </div>
        <button
          type="submit"
          className="p-10 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
          onClick={notify}
        >
          サインアップ
        </button>
      </form>
      <Toaster />
    </div>
  );
};
