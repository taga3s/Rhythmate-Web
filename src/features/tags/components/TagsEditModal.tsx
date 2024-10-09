import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { FormErrorMsg, StarIcon, TagIcon } from "../../common/components";
import { ModalBase } from "../../common/components/modal/ModalBase";
import { ModalHeaderCloseButton } from "../../common/components/modal/ModalHeaderCloseButton";
import { useMutateTag } from "../hooks/useMutateTag";
import { useQueryTagList } from "../hooks/useQueryTag";
import { type TTagValidationSchema, tagValidationSchema } from "../validation";
import { TagsColorDropdown } from "./TagsColorDropdown";

type Props = {
  modalType: string;
  closeModal: () => void;
  tagId: string;
};

type NewValues = {
  name: string;
  color: string;
};

export const TagsEditModal: FC<Props> = ({ modalType, closeModal, tagId }) => {
  const { updateTagMutation } = useMutateTag();
  const { data: tagListData } = useQueryTagList();

  const targetTag = tagListData?.find((v) => v.id === tagId);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TTagValidationSchema>({
    mode: "onBlur",
    resolver: zodResolver(tagValidationSchema),
    defaultValues: {
      color: targetTag?.color ?? "",
    },
  });

  const onUpdateTag = handleSubmit(async (data: NewValues) => {
    await updateTagMutation.mutateAsync({
      id: tagId,
      name: data.name,
      color: data.color,
    });
  });

  return (
    <ModalBase onClickClose={closeModal} onKeyDownClose={closeModal}>
      <div className="order relative bg-white rounded-lg shadow">
        {/* <!-- Modal header --> */}
        <div className="flex items-center justify-between p-4 md:p-4 rounded-t border-b">
          <h3 className="font-cp-font text-xl font-bold text-rhyth-dark-blue">{modalType}</h3>
          <ModalHeaderCloseButton onClickClose={closeModal} />
        </div>
        {/* <!-- Modal body --> */}
        <div className="p-4 md:p-4">
          <form
            className="space-y-3"
            onSubmit={() => {
              onUpdateTag();
              closeModal();
            }}
          >
            <div className="flex items-center justify-between">
              <label className="flex gap-2 mb-2 text-sm font-bold text-rhyth-dark-blue my-2" htmlFor="tag-name">
                <div className="w-6 h-6 text-rhyth-gray">
                  <TagIcon />
                </div>
                <span>タグ名</span>
              </label>
              <input
                id="tag-name"
                type="text"
                defaultValue={targetTag?.name}
                className="bg-white border border-rhyth-light-gray text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 p-2"
                placeholder="例) 家事"
                required
                {...register("name")}
              />
            </div>
            {errors.name && <FormErrorMsg msg={errors.name.message} />}
            <div className="flex items-start justify-between">
              <label className="flex gap-2 mb-2 text-sm font-bold text-rhyth-dark-blue my-2" htmlFor="tag-color">
                <div className="w-6 h-6 text-rhyth-gray">
                  <StarIcon />
                </div>
                <span>カラー</span>
              </label>
              <TagsColorDropdown selectedColor={watch("color")} register={register} />
            </div>
            {errors.color && <FormErrorMsg msg={errors.color.message} />}
            <button
              type="submit"
              className="w-full text-white bg-rhyth-blue hover:bg-rhyth-hover-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md"
            >
              決定する
            </button>
          </form>
        </div>
      </div>
    </ModalBase>
  );
};
