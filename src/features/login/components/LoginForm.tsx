import "../../../firebase/config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { notifyFailed } from "../../../pkg/ui/toast";
import { useMutateUser } from "../api/user/hooks/useMutateUser";
import { FirebaseError } from "firebase/app";
import { useState } from "react";
import { Loading } from "../../common/components";
import { LoginBird } from "./LoginBird";

export const LoginForm = () => {
  const { authMutation } = useMutateUser();
  const provider = new GoogleAuthProvider().setCustomParameters({
    prompt: "select_account",
  });
  const auth = getAuth();

  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user) {
        throw new Error("ログインに失敗しました。");
      }

      setIsLoading(true);

      const idToken = await user.getIdToken();
      await authMutation.mutateAsync({
        idToken: idToken,
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
    <div className="flex flex-col">
      <LoginBird className={"mx-auto"} />
      <h1 className="text-md font-bold text-rhyth-black text-center">Rhythmateを始めましょう！</h1>
      <button
        className="p-4 mt-10 font-bold text-rhyth-black rounded-md shadow-md border-2 border-rhyth-bg-light-gray cursor-pointer flex justify-center items-center gap-4 hover:bg-rhyth-bg-gray"
        onClick={signInWithGoogle}
      >
        <img src="/icons/google.png" width={20} height={20} alt="googleのアイコン" />
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
