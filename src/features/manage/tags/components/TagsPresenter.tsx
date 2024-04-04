import { useState } from "react";
import { TagsItem } from "./TagsItem";
import { ConfirmModal } from "../../../common/components/ConfirmModal";
import { TagsEditModal } from "./TagsEditModal";
import { TagsNewButton } from "./TagsNewButton";
import { useNavigate } from "@tanstack/react-router";
import { useQueryTagList } from "../api/tag/hooks/useQueryTag";
import { Loading, LoadingContainer } from "../../../common/components";

type Tag = {
  tagName: string;
  tagColor: string;
};

export const TagsPresenter = () => {
  const navigate = useNavigate();
  const [isTagsEditModalOpen, setIsTagsEditModalOpen] = useState<boolean>(false);
  const [isTagsDeleteModalOpen, setIsTagsDeleteModalOpen] = useState<boolean>(false);
  const [isTagsNewModalOpen, setIsTagsNewModalOpen] = useState<boolean>(false);
  // const [tagItems] = useState<Tag[]>([
  //   { tagName: "勉強・スキルアップ", tagColor: "Green" },
  //   { tagName: "健康的な習慣", tagColor: "Purple" },
  //   { tagName: "生活・ライフスタイル", tagColor: "Blue" },
  // ]);
  const { data: tagItems, isLoading } = useQueryTagList();

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
      <button onClick={() => navigate({ to: "/manage" })} className="block">
        <div className="px-2 py-2 flex gap-2 items-center bg-white font-bold text-sm rounded-md border-2 border-rhyth-light-gray shadow-sm">
          <svg
            className="w-6 h-6 text-rhyth-gray"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
          <p className="text-rhyth-gray">ひとつ前へ戻る</p>
        </div>
      </button>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-cp-font font-black text-xl text-rhyth-gray tracking-widest">
            タグ管理
          </h1>
          <TagsNewButton onClickFn={openTagsNewModal} />
        </div>
        <div>
          <ul className="text-md font-bold text-rhyth-dark-blue bg-white border-2 border-rhyth-light-gray rounded-lg shadow-md">
            {isLoading ? (
              <LoadingContainer>
                <Loading />
              </LoadingContainer>
            ) : tagItems?.length ? (
              tagItems.map((item, index) => (
              <TagsItem
                key={index}
                tagName={item.name}
                tagColor={item.color}
                onEditFn={openTagsEditModal}
                onDeleteFn={openTagsDeleteModal}
              />
              ))
              ) : (
                <div className="w-full gap-4 flex flex-col items-center mx-auto text-xl">
                  <p>タグが登録されていません</p>
                  <p>タグを作成してください</p>
                </div>
            )}
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
