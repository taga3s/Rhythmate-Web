import { useState } from "react";
import { TagsItem } from "./TagsItem";
import { ConfirmModal } from "../../../common/components/ConfirmModal";
import { TagsEditModal } from "./TagsEditModal";
import { TagsNewButton } from "./TagsNewButton";

export const TagsPresenter = () => {
  const [isTagsEditModalOpen, setIsTagsEditModalOpen] = useState<boolean>(false);
  const [isTagsDeleteModalOpen, setIsTagsDeleteModalOpen] = useState<boolean>(false);
  const [tagsName, setTagsName] = useState<string[]>(["勉強・スキルアップ", "健康的な習慣", "生活・ライフスタイル"]);
  const [tagsColor, setTagsColor] = useState<string[]>(["Green", "Purple", "Blue"]);

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

  const currentTagsItem = () => {
    tagsName.map((tagName, index) => (
      <TagsItem
        key={index}
        tagName={tagName}
        tagColor={tagsColor[index]}
        onEditFn={openTagsEditModal}
        onDeleteFn={openTagsDeleteModal}
      />
    ));
  };

  return (
    <>
      <div>
        <h1 className="font-cp-font font-black text-lg text-rhyth-gray tracking-widest mb-2">タグ管理</h1>
        <div>
          <ul className="text-md font-bold text-rhyth-dark-blue bg-white border-2 border-rhyth-light-gray rounded-lg shadow-md">
            {tagsName.map((tagName, index) => (
              <TagsItem
                key={index}
                tagName={tagName}
                tagColor={tagsColor[index]}
                onEditFn={openTagsEditModal}
                onDeleteFn={openTagsDeleteModal}
              />
            ))}
          </ul>
        </div>
        <TagsNewButton />
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
