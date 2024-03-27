import { useState } from "react";
import { TagsItem } from "./TagsItem";
import { ConfirmModal } from "../../../common/components/ConfirmModal";
import { TagsEditModal } from "./TagsEditModal";
import { TagsNewButton } from "./TagsNewButton";

type Tag = {
  tagName: string;
  tagColor: string;
};

export const TagsPresenter = () => {
  const [isTagsEditModalOpen, setIsTagsEditModalOpen] = useState<boolean>(false);
  const [isTagsDeleteModalOpen, setIsTagsDeleteModalOpen] = useState<boolean>(false);
  const [isTagsNewModalOpen, setIsTagsNewModalOpen] = useState<boolean>(false);
  const [tagItems] = useState<Tag[]>([
    { tagName: "勉強・スキルアップ", tagColor: "Green" },
    { tagName: "健康的な習慣", tagColor: "Purple" },
    { tagName: "生活・ライフスタイル", tagColor: "Blue" },
  ]);
  // const [editTag, setEditTag] = useState<Tag>({ tagName: "", tagColor: "" });

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
  const openTagsNewModal = () => {
    setIsTagsNewModalOpen(true);
  };
  const closeTagsNewModal = () => {
    setIsTagsNewModalOpen(false);
  };

  // const changeTagItem = (key: number, tag: Tag) => {
  //   const nextTagsName = tagItems.map((tagItem, index) => {
  //     if (key === index) {
  //       return { tagName: tag.tagName, tagColor: tag.tagColor };
  //     } else {
  //       return tagItem;
  //     }
  //   });
  //   setTagItems(nextTagsName);
  // };

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-cp-font font-black text-lg text-rhyth-gray tracking-widest">タグ管理</h1>
          <TagsNewButton onClickFn={openTagsNewModal} />
        </div>
        <div>
          <ul className="text-md font-bold text-rhyth-dark-blue bg-white border-2 border-rhyth-light-gray rounded-lg shadow-md">
            {tagItems.map((item, index) => (
              <TagsItem
                key={index}
                tagName={item.tagName}
                tagColor={item.tagColor}
                onEditFn={openTagsEditModal}
                onDeleteFn={openTagsDeleteModal}
              />
            ))}
          </ul>
        </div>
      </div>
      {isTagsEditModalOpen && (
        <TagsEditModal
          modalType="タグ編集"
          // confirmBtnText="タグを削除する"
          // cancelBtnText="キャンセルする"
          // btnColor="red"
          // // actionFnは後ほど修正
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
      {isTagsNewModalOpen && <TagsEditModal modalType="タグ作成" closeModal={closeTagsNewModal} />}
    </>
  );
};
