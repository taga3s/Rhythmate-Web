import "../../../config/firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { notifyFailed } from "../../../pkg/ui/toast";
import { useMutateUser } from "../api/user/hooks/useMutateUser";
import { useState } from "react";

export const LoginForm = () => {
  const { authMutation } = useMutateUser();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user) {
        throw new Error("ログインに失敗しました。");
      }

      const idToken = await user.getIdToken();
      authMutation.mutateAsync({
        idToken: idToken,
      });
    } catch (error) {
      notifyFailed("エラーが発生しました。\n時間をおいて再度お試しください。");
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.customData.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };

  return (
    <div>
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
      <button
        className="w-[240px] p-4 mt-6 bg-white font-bold text-black rounded-md shadow-md cursor-pointer flex justify-center items-center gap-4"
        onClick={signInWithGoogle}
      >
        <img src="/icons/google.png" width={20} height={20} alt="googleのアイコン" />
        Googleでサインインする
      </button>
      {isLoading && <p>認証中...</p>}
    </div>
  );
};
