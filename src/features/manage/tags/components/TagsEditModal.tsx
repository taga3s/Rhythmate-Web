import { FC, useEffect } from "react";
import { TagsColorDropdown } from "./TagsColorDropdown";
import { ModalBase } from "../../../common/components/modal/ModalBase";
import { ModalHeaderCloseButton } from "../../../common/components/modal/ModalHeaderCloseButton";
import { useMutateTag } from "../api/tag/hooks/useMutateTag";
import { TTagValidationSchema, tagValidationSchema } from "../common/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormErrorMsg } from "../../../common/components";
import { useQueryTagList } from "../api/tag/hooks/useQueryTag";

type Props = {
  modalType: string;
  closeModal: () => void;
  tag_id: string;
};

type NewValues = {
  name: string;
  color: string;
};

export const TagsEditModal: FC<Props> = ({ modalType, closeModal, tag_id }) => {
  const { updateTagMutation } = useMutateTag();
  const { data, isLoading } = useQueryTagList();

  const targetTag = data?.find((v) => v.id === tag_id);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TTagValidationSchema>({
    mode: "onBlur",
    resolver: zodResolver(tagValidationSchema),
  });

  useEffect(() => {
    setValue("color", targetTag?.color ?? "");
  }, [isLoading]);

  const onSubmit = async (data: NewValues) => {
    await updateTagMutation.mutateAsync({
      id: tag_id,
      name: data.name,
      color: data.color,
    });
    closeModal();
  };

  return (
    <ModalBase onClickClose={closeModal}>
      <div className="order relative bg-white rounded-lg shadow">
        {/* <!-- Modal header --> */}
        <div className="flex items-center justify-between p-4 md:p-4 rounded-t border-b">
          <h3 className="font-cp-font text-xl font-bold text-rhyth-dark-blue">{modalType}</h3>
          <ModalHeaderCloseButton onClickClose={closeModal} />
        </div>
        {/* <!-- Modal body --> */}
        <div className="p-4 md:p-4">
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center justify-between">
              <label className="flex gap-2 mb-2 text-sm font-bold text-rhyth-dark-blue my-2" htmlFor="tag-name">
                <svg
                  className="w-6 h-6 text-rhyth-gray"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
                </svg>
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
                <svg
                  className="w-6 h-6 text-rhyth-gray"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11.613a2 2 0 0 0 1.346-.52l4.4-4a2 2 0 0 0 0-2.96l-4.4-4A2 2 0 0 0 15.613 6H4Z" />
                </svg>
                <span>色ラベル</span>
              </label>
              <TagsColorDropdown register={register} watch={watch} />
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
