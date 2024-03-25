import { useState } from "react";
import { TagsItem } from "./TagsItem";
import { ConfirmModal } from "../../../common/components/ConfirmModal";
import { TagsEditModal } from "./TagsEditModal";

export const TagsPresenter = () => {
  const [isTagsEditModalOpen, setIsTagsEditModalOpen] = useState<boolean>(false);
  const [isTagsDeleteModalOpen, setIsTagsDeleteModalOpen] = useState<boolean>(false);

  const openTagsEditModal = () => {
    setIsTagsEditModalOpen(true);
  };
  const closeTagsEditModal = () => {
    setIsTagsEditModalOpen(false);
  };
  const openTagsDeleteModal = () => {
    setIsTagsDeleteModalOpen(true);
  };
  const closeTagsDeleteModal = () => {
    setIsTagsDeleteModalOpen(false);
  };

  return (
    <>
      <div>
        <h1 className="font-cp-font font-black text-lg text-rhyth-gray tracking-widest mb-2">タグ管理</h1>
        <div>
          <ul className="text-md font-bold text-rhyth-dark-blue bg-white border-2 border-rhyth-light-gray rounded-lg shadow-md">
            <TagsItem
              tagName="勉強・スキルアップ"
              tagColor="Green"
              onEditFn={openTagsEditModal}
              onDeleteFn={openTagsDeleteModal}
            />
            <TagsItem
              tagName="健康的な習慣"
              tagColor="Purple"
              onEditFn={openTagsEditModal}
              onDeleteFn={openTagsDeleteModal}
            />
            <TagsItem
              tagName="生活・ライフスタイル"
              tagColor="Blue"
              onEditFn={openTagsEditModal}
              onDeleteFn={openTagsDeleteModal}
            />
          </ul>
        </div>
      </div>
      {isTagsEditModalOpen && (
        <TagsEditModal
          // text="本当にこのタグを削除しますか？"
          // confirmBtnText="タグを削除する"
          // cancelBtnText="キャンセルする"
          // btnColor="red"
          // // actionFnは後ほど修正
          // actionFn={closeTagsEditModal}
          closeModal={closeTagsEditModal}
        />
      )}
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
