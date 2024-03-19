import { useState } from "react";
import { TagsItem } from "./TagsItem";
import { ConfirmModal } from "../../../common/components/ConfirmModal";

export const TagsPresenter = () => {
  const [isTagsDeleteModalOpen, setIsTagsDeleteModalOpen] = useState<boolean>(false);

  const openTagsDeleteModal = () => {
    setIsTagsDeleteModalOpen(true);
  };
  const closeTagsDeleteModal = () => {
    setIsTagsDeleteModalOpen(false);
  };

  return (
    <>
      <div>
        <h1 className="font-black text-lg text-rhyth-gray mb-2">タグ管理</h1>
        <div>
          <ul className="text-md font-bold text-rhyth-dark-blue bg-white border-2 border-rhyth-light-gray rounded-lg">
            <TagsItem onDeleteFn={openTagsDeleteModal} />
            <TagsItem onDeleteFn={openTagsDeleteModal} />
          </ul>
        </div>
      </div>
      {isTagsDeleteModalOpen && (
        <ConfirmModal
          text="本当にこのタグを削除しますか？"
          confirmBtnText="タグを削除する"
          cancelBtnText="キャンセルする"
          btnColor="red"
          // actionFnは後ほど修正
          actionFn={closeTagsDeleteModal}
          closeModal={closeTagsDeleteModal}
        />
      )}
    </>
  );
};
