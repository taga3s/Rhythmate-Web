import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ConfirmModal, FormErrorMsg } from "../../../common/components";
import { BackButton } from "../../../common/components/BackButton";
import { useMutateUser } from "../../api/user/hooks/useMutateUser";
import { useQueryLoginUser } from "../../api/user/hooks/useQueryUser";
import { type TUserEditValidationSchema, userEditValidationSchema } from "../../libs/validation";
import { useGetImageUrl } from "../hooks/useGetImageUrl";
import { SettingsImageCropModal } from "./SettingsImageCropModal";
import { SettingsInputImage } from "./SettingsInputImage";

export const SettingsPresenter = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data: loginUserData } = useQueryLoginUser();
  const { updateUserMutation, deleteUserMutation } = useMutateUser();
  const navigation = useNavigate();

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
      image_src: profileImage,
    });
    navigation({ to: "/profile" });
  };

  const onSubmitDelete = async () => {
    await deleteUserMutation.mutateAsync();
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [inputImageFile, setInputImageFile] = useState<File | null>(null);
  const { imageUrl: inputImageUrl } = useGetImageUrl({ file: inputImageFile });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.[0]) {
      const targetFile = e.currentTarget.files[0];
      setInputImageFile(targetFile);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const [imageCropModalOpen, setImageCropModalOpen] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string>(loginUserData.imageUrl ?? "");

  useEffect(() => {
    if (inputImageUrl && inputImageFile) {
      setImageCropModalOpen(true);
    }
  }, [inputImageUrl, inputImageFile]);

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
              <div className="w-20 md:w-32 h-20 md:h-32">
                <img src={profileImage} alt="現在のプロフィール画像" className="w-full h-full rounded-full" />
              </div>
              <SettingsInputImage ref={fileInputRef} onChange={handleFileChange} />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 my-4">ユーザー名</label>
              <input
                type="text"
                defaultValue={loginUserData?.name ?? ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="あなたの名前"
                {...register("name")}
                required
              />
              {errors.name && <FormErrorMsg msg={errors.name.message ?? ""} />}
            </div>
            <button
              type="submit"
              className="w-full text-white bg-rhyth-light-blue hover:bg-rhyth-blue disabled:bg-rhyth-light-gray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              disabled={updateUserMutation.isPending}
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
              type="button"
              className="w-full text-white bg-rhyth-red hover:bg-rhyth-dark-red focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 text-center"
              onClick={() => setOpenModal(true)}
            >
              アカウント削除
            </button>
          </div>
        </div>
      </div>
      {imageCropModalOpen && (
        <SettingsImageCropModal
          imageUrl={inputImageUrl}
          closeModal={() => {
            setInputImageFile(null);
            setImageCropModalOpen(false);
          }}
          setProfileImage={setProfileImage}
        />
      )}
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
