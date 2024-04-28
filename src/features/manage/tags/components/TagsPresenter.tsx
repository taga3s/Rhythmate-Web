import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Loading, LoadingContainer } from "../../../common/components";
import { BackButton } from "../../../common/components/BackButton";
import { ConfirmModal } from "../../../common/components/ConfirmModal";
import { useMutateTag } from "../api/tag/hooks/useMutateTag";
import { useQueryTagList } from "../api/tag/hooks/useQueryTag";
import { TagsEditModal } from "./TagsEditModal";
import { TagsItem } from "./TagsItem";
import { TagsNewButton } from "./TagsNewButton";
import { TagsNewModal } from "./TagsNewModal";

export const TagsPresenter = () => {
  const navigate = useNavigate();
  const [isTagsEditModalOpen, setIsTagsEditModalOpen] = useState<boolean>(false);
  const [isTagsDeleteModalOpen, setIsTagsDeleteModalOpen] = useState<boolean>(false);
  const [isTagsNewModalOpen, setIsTagsNewModalOpen] = useState<boolean>(false);

  const [selectedTagId, setSelectedTagId] = useState<string>();

  const { data: tagItems, isLoading } = useQueryTagList();

  const { deleteTagMutation } = useMutateTag();

  const onClickDelete = async () => {
    await deleteTagMutation.mutateAsync({
      id: selectedTagId ?? "",
    });
  };

  const openTagsEditModal = (tagId: string) => {
    setSelectedTagId(tagId);
    setIsTagsEditModalOpen(true);
  };
  const closeTagsEditModal = () => {
    setIsTagsEditModalOpen(false);
  };
  const openTagsDeleteModal = (tagId: string) => {
    setSelectedTagId(tagId);
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
      <BackButton onClickNavigation={() => navigate({ to: "/manage" })} />
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-cp-font font-black text-xl text-rhyth-gray tracking-widest">登録しているタグ一覧</h1>
          <TagsNewButton onClickFn={openTagsNewModal} />
        </div>
        <div className="text-rhyth-dark-blue">
          {isLoading ? (
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          ) : tagItems?.length ? (
            <ul className="text-md font-bold bg-white border-2 border-rhyth-light-gray rounded-lg shadow-md">
              {tagItems.map((item) => (
                <TagsItem
                  key={item.id}
                  tagName={item.name}
                  tagColor={item.color}
                  onEditFn={() => openTagsEditModal(item.id)}
                  onDeleteFn={() => openTagsDeleteModal(item.id)}
                />
              ))}
            </ul>
          ) : (
            <div className="mt-20 gap-2 flex flex-col items-center text-lg font-bold">
              <span>タグが登録されていません。</span>
              <span>新規作成から作成できます。</span>
            </div>
          )}
        </div>
      </div>
      {isTagsEditModalOpen && (
        <TagsEditModal modalType="タグ編集" closeModal={closeTagsEditModal} tagId={selectedTagId ?? ""} />
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
