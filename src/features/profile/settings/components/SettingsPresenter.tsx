import { useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SettingsInputImage } from "./SettingsInputImage";
import { useQueryLoginUser } from "../../api/user/hooks/useQueryUser";
import { useMutateUser } from "../../api/user/hooks/useMutateUser";
import { TUserEditValidationSchema, userEditValidationSchema } from "../../libs/validation";
import { useGetImageUrl } from "../hooks/useGetImageUrl";
import { ConfirmModal, FormErrorMsg } from "../../../common/components";
import { BackButton } from "../../../common/components/BackButton";

const IMAGE_ID = "imageId";

export const SettingsPresenter = () => {
  const navigation = useNavigate();

  const { data: loginUser } = useQueryLoginUser();
  const { updateUserMutation, deleteUserMutation } = useMutateUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserEditValidationSchema>({
    mode: "onBlur",
    resolver: zodResolver(userEditValidationSchema),
  });

  const onSubmitUpdate = async (userData: TUserEditValidationSchema) => {
    await updateUserMutation.mutateAsync({
      name: userData.name,
    });
    navigation({ to: "/profile" });
  };
  const onSubmitDelete = async () => {
    await deleteUserMutation.mutateAsync();
  }

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { imageUrl } = useGetImageUrl({ file: imageFile });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget?.files && e.currentTarget.files[0]) {
      const targetFile = e.currentTarget.files[0];
      setImageFile(targetFile);
    }
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="flex flex-col space-y-5 w-full">
        <div className="flex justify-start gap-3">
          <BackButton onClickNavigation={() => navigation({ to: "/profile" })} />
        </div>
        <h1 className="flex text-2xl justify-center font-bold">ユーザー設定</h1>
        <div className="p-4 flex flex-col gap-3 bg-white rounded-lg shadow">
          <h2 className="font-bold text-lg text-gray-900">ユーザー情報編集</h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmitUpdate)}>
            <label className="block text-sm font-medium text-gray-900">プロフィール画像</label>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-6">
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
              <label className="block mb-2 text-sm font-medium text-gray-900 my-4">ユーザー名</label>
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
          <h2 className="font-bold text-lg text-rhyth-dark-red">Danger Zone</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900">アカウント削除</label>
              <p className="text-sm mt-2">
                アカウント削除を実行すると、このアカウントのデータは復元することができません。
              </p>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-rhyth-red hover:bg-rhyth-dark-red focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 text-center"
              onClick={() => setOpenModal(true)}
            >
              アカウント削除
            </button>
          </div>
        </div>
      </div>
      {openModal && (
        <ConfirmModal
          text={"本当にアカウント削除を行いますか?"}
          confirmBtnText={"削除する"}
          cancelBtnText={"キャンセルする"}
          btnColor={"red"}
          actionFn={onSubmitDelete}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </>
  );
};
