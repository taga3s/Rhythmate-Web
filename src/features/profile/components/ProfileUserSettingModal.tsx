import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalBase } from "../../common/components/modal/ModalBase";
import { ModalHeaderCloseButton } from "../../common/components/modal/ModalHeaderCloseButton";
import { FormErrorMsg } from "../../common/components/utils/FormErrorMsg";
import { useMutateUser } from "../api/user/hooks/useMutateUser";
import { TUserEditValidationSchema, userEditValidationSchema } from "../libs/validation";
import { InputImage } from "./InputImage";
import { useGetImageUrl } from "./useGetImageUrl";

type Props = {
  username: string;
  onClickFn: () => void;
};
const IMAGE_ID = "imageId";

export const ProfileUserSettingsModal: FC<Props> = ({ username, onClickFn }) => {
  const { updateUserMutation } = useMutateUser();
  const beforeUserName: string = username;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserEditValidationSchema>({
    mode: "onBlur",
    resolver: zodResolver(userEditValidationSchema),
  });

  const onSubmit = async (userdata: TUserEditValidationSchema) => {
    onClickFn();
    console.log(imageUrl);
    await updateUserMutation.mutateAsync({
      name: userdata.name,
    });
  };

  // 変更箇所
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget?.files && e.currentTarget.files[0]) {
      const targetFile = e.currentTarget.files[0];
      setImageFile(targetFile);
    }
  };
  const { imageUrl } = useGetImageUrl({ file: imageFile });

  return (
    <ModalBase onClickClose={onClickFn}>
      <div className="order relative bg-white rounded-lg shadow">
        {/* <!-- Modal header --> */}
        <div className="flex items-center justify-between p-4 md:p-4 border-b rounded-t">
          <h3 className="text-xl font-semibold text-gray-900">ユーザー情報変更</h3>
          <ModalHeaderCloseButton onClickClose={onClickFn} />
        </div>
        {/* <!-- Modal body --> */}
        <div className="p-4 md:p-4">
          <form className="space-y-4" action="#" onSubmit={handleSubmit(onSubmit)}>
            {/* 画像ボタンとプレビュー */}

            {imageUrl && imageFile ? (
              <img
                src={imageUrl}
                alt="アップロード画像"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            ) : (
              ""
            )}
            <InputImage ref={fileInputRef} id={IMAGE_ID} onChange={handleFileChange} />
            {/* 画像ボタンとプレビュー終 */}

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 my-4">ユーザーネーム</label>
              <input
                type="text"
                defaultValue={beforeUserName}
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
      </div>
    </ModalBase>
  );
};
