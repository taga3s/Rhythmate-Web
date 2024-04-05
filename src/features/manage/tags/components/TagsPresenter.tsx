import { useState } from "react";
import { TagsItem } from "./TagsItem";
import { ConfirmModal } from "../../../common/components/ConfirmModal";
import { TagsEditModal } from "./TagsEditModal";
import { TagsNewButton } from "./TagsNewButton";
import { useNavigate } from "@tanstack/react-router";
import { useQueryTagList } from "../api/tag/hooks/useQueryTag";
import { Loading, LoadingContainer } from "../../../common/components";
import { useMutateTag } from "../api/tag/hooks/useMutateTag";
import { TagsNewModal } from "./TagsNewModal";

export const TagsPresenter = () => {
  const navigate = useNavigate();
  const [isTagsEditModalOpen, setIsTagsEditModalOpen] = useState<boolean>(false);
  const [isTagsDeleteModalOpen, setIsTagsDeleteModalOpen] = useState<boolean>(false);
  const [isTagsNewModalOpen, setIsTagsNewModalOpen] = useState<boolean>(false);

  const [ selectedTagId, setSelectedTagId ] = useState<string>();

  const { data: tagItems, isLoading } = useQueryTagList();

  const { deleteTagMutation } = useMutateTag();

  const onClickDelete = async () => {
    await deleteTagMutation.mutateAsync({
      id: selectedTagId?? ""
    });
  };


  const openTagsEditModal = (tag_id: string) => {
    setSelectedTagId(tag_id);
    setIsTagsEditModalOpen(true);
  };
  const closeTagsEditModal = () => {
    setIsTagsEditModalOpen(false);
  };
  const openTagsDeleteModal = (tag_id: string) => {
    setSelectedTagId(tag_id);
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

  return (
    <>
      <button onClick={() => navigate({ to: "/manage" })} className="block">
        <div className="px-2 py-2 flex gap-2 items-center bg-white hover:bg-rhyth-hover-light-gray font-bold text-sm rounded-md border-2 border-rhyth-light-gray shadow-sm">
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
                onEditFn={() => openTagsEditModal(item.id)}
                onDeleteFn={() => openTagsDeleteModal(item.id)}
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
          closeModal={closeTagsEditModal}
          tag_id={selectedTagId?? ""}
        />
      )}
      {isTagsDeleteModalOpen && (
        <ConfirmModal
          text="本当にこのタグを削除しますか？"
          confirmBtnText="タグを削除する"
          cancelBtnText="キャンセルする"
          btnColor="red"
          actionFn={onClickDelete}
          closeModal={closeTagsDeleteModal}
        />
      )}
      {isTagsNewModalOpen && <TagsNewModal modalType="タグ作成" closeModal={closeTagsNewModal} />}
    </>
  );
};
