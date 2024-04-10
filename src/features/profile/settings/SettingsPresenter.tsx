import { useNavigate } from "@tanstack/react-router";
import { BadgesBackButton } from "../badges/components/BadgesBackButton";
import { FormErrorMsg } from "../../common/components";
import { useGetImageUrl } from "../components/useGetImageUrl";
import { useRef, useState } from "react";
import { TUserEditValidationSchema, userEditValidationSchema } from "../libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutateUser } from "../api/user/hooks/useMutateUser";
import { useQueryLoginUser } from "../api/user/hooks/useQueryUser";
import { SettingsInputImage } from "./SettingsInputImage";

const IMAGE_ID = "imageId";

export const SettingsPresenter = () => {
  const navigation = useNavigate();

  const { data: loginUser } = useQueryLoginUser();
  const { updateUserMutation } = useMutateUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserEditValidationSchema>({
    mode: "onBlur",
    resolver: zodResolver(userEditValidationSchema),
  });

  const onSubmit = async (userData: TUserEditValidationSchema) => {
    await updateUserMutation.mutateAsync({
      name: userData.name,
    });
    navigation({ to: "/profile" });
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const { imageUrl } = useGetImageUrl({ file: imageFile });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget?.files && e.currentTarget.files[0]) {
      const targetFile = e.currentTarget.files[0];
      setImageFile(targetFile);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col space-y-5 w-full">
        <div className="flex justify-start gap-3">
          <BadgesBackButton onClickFn={() => navigation({ to: "/profile" })} />
        </div>
        <p className="flex text-2xl justify-center font-bold">ユーザー情報編集</p>
        <div className="p-4 order relative bg-white rounded-lg shadow">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center items-center">
              <div className="max-w-[220px] w-1/4 max-h-[220px] h-1/4">
                {imageUrl && imageFile ? (
                  <img src={imageUrl} alt="アップロード画像" className="w-full h-full rounded-full" />
                ) : (
                  <img src={loginUser?.imageUrl} alt="現在設定されている画像" className="w-full h-full rounded-full" />
                )}
              </div>
              <SettingsInputImage ref={fileInputRef} id={IMAGE_ID} onChange={handleFileChange} />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 my-4">ユーザーネーム</label>
              <input
                type="text"
                defaultValue={loginUser?.name ?? ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="あなたの名前"
                {...register("name")}
                required
              />
              {errors.name && <FormErrorMsg msg={errors.name.message ?? ""} />}
            </div>
            <button
              type="submit"
              className="w-full text-white bg-rhyth-light-blue hover:bg-rhyth-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              保存
            </button>
          </form>
        </div>
        <div className="p-4 flex flex-col gap-3 order relative bg-red-100 rounded-lg shadow">
          <h2 className="font-bold text-rhyth-dark-red">Danger Zone</h2>
          <p className="text-sm">ユーザ―削除を実行すると、このアカウントのデータは復元することができません。</p>
          <button
            type="submit"
            className="w-full text-white bg-rhyth-red hover:bg-rhyth-dark-red focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            ユーザー削除
          </button>
        </div>
      </div>
    </div>
  );
};
