import "../../../config/firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { notifyFailed } from "../../../pkg/ui/toast";
import { useMutateUser } from "../api/user/hooks/useMutateUser";
import { FirebaseError } from "firebase/app";

export const LoginForm = () => {
  const { authMutation } = useMutateUser();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = async () => {
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
      if (error instanceof FirebaseError) {
        if (error.code !== "auth/popup-closed-by-user") {
          notifyFailed("エラーが発生しました。\n時間をおいて再度お試しください。");
        }
      }
    }
  };

  return (
    <div>
      <svg
        className="w-[120px] h-[120px] text-rhyth-black mx-auto"
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
      <h1 className="text-md font-bold text-rhyth-black text-center">Rhythmateを始めましょう</h1>
      <button
        className="p-4 mt-10 font-bold text-rhyth-black rounded-md shadow-md border-2 border-rhyth-bg-light-gray cursor-pointer flex justify-center items-center gap-4"
        onClick={signInWithGoogle}
      >
        <img src="/icons/google.png" width={20} height={20} alt="googleのアイコン" />
        Googleでサインイン
      </button>
    </div>
  );
};
