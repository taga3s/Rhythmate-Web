import { FirebaseError } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import "../../../firebase/config";
import { notifyFailed } from "../../common/utils";
import { Loading } from "../../common/components";
import { useMutateUser } from "../hooks/useMutateUser";

export const LoginForm = () => {
  const { authMutation } = useMutateUser();
  const provider = new GoogleAuthProvider().setCustomParameters({
    prompt: "select_account",
  });
  const auth = getAuth();

  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      if (!result.user.emailVerified) {
        throw new Error("ログインに失敗しました。");
      }

      const idToken = await result.user.getIdToken();
      await authMutation.mutateAsync({
        id_token: idToken,
      });
    } catch (error) {
      if (error instanceof FirebaseError && error.code !== "auth/popup-closed-by-user") {
        notifyFailed("ログインに失敗しました。");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-8">
      <span className="text-md text-rhyth-black text-center">楽しく、習慣化を始めていきましょう！</span>
      <button
        type="button"
        className="p-4 mt-10 font-bold text-rhyth-black rounded-md shadow-md border-2 border-rhyth-bg-light-gray cursor-pointer flex justify-center items-center gap-4 hover:bg-rhyth-bg-gray"
        onClick={signInWithGoogle}
      >
        <picture className="w-5 h-5">
          <source srcSet="/icons/google.webp" type="image/webp" />
          <source srcSet="/icons/google.png" type="image/png" />
          <img alt="Googleのアイコン" />
        </picture>
        Googleでサインイン
      </button>
      {isLoading && (
        <div className="mt-6">
          <Loading />
        </div>
      )}
    </div>
  );
};
