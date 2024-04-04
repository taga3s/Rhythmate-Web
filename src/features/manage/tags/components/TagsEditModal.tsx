import { FC, useState } from "react";
import { TagsColorDropdown } from "./TagsColorDropdown";
import { ModalBase } from "../../../common/components/modal/ModalBase";
import { ModalHeaderCloseButton } from "../../../common/components/modal/ModalHeaderCloseButton";

type Props = {
  modalType: string;
  closeModal: () => void;
};

export const TagsEditModal: FC<Props> = ({ modalType, closeModal }) => {
  const [tagColor, setTagColor] = useState<string>("");

  const handleTagColor = (color: string) => {
    setTagColor(color);
  };

  const onSubmit = () => {
    closeModal();
    // 一時的に追加しておきます
    console.log(tagColor);
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
          <form className="space-y-4" onSubmit={onSubmit}>
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
                // defaultValue={beforeUserName}
                className="bg-white border border-rhyth-light-gray text-rhyth-dark-blue text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 p-2"
                placeholder="tagname"
                // {...register("tagName")}
                required
              />
              {/* {errors.name && <FormErrorMsg msg={errors.name.message ?? ""} />} */}
            </div>
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
              <TagsColorDropdown onSelectFn={handleTagColor} />
            </div>
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
