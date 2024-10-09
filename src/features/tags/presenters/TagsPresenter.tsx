import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { BackButton } from "../../common/components/BackButton";
import { ConfirmModal } from "../../common/components/ConfirmModal";
import { useMutateTag } from "../hooks/useMutateTag";
import { useQueryTagList } from "../hooks/useQueryTag";
import { TagsEditModal } from "../components/TagsEditModal";
import { TagsItem } from "../components/TagsItem";
import { TagsNewButton } from "../components/TagsNewButton";
import { TagsNewModal } from "../components/TagsNewModal";

export const TagsPresenter = () => {
  const [isTagsNewModalOpen, setIsTagsNewModalOpen] = useState<boolean>(false);
  const [isTagsEditModalOpen, setIsTagsEditModalOpen] = useState<boolean>(false);
  const [isTagsDeleteModalOpen, setIsTagsDeleteModalOpen] = useState<boolean>(false);
  const [selectedTagId, setSelectedTagId] = useState<string>("");

  const navigate = useNavigate();
  const { data: tagItems } = useQueryTagList();
  const { deleteTagMutation } = useMutateTag();

  const onDeleteTag = async () => {
    await deleteTagMutation.mutateAsync({
      id: selectedTagId,
    });
  };

  const handleNavigate = () => {
    navigate({ to: "/manage" });
  };
  const handleOpenNewModal = () => {
    setIsTagsNewModalOpen(true);
  };
  const handleCloseNewModal = () => {
    setIsTagsNewModalOpen(false);
  };
  const handleOpenEditModal = (tagId: string) => {
    setSelectedTagId(tagId);
    setIsTagsEditModalOpen(true);
  };
  const handleCloseEditModal = () => {
    setIsTagsEditModalOpen(false);
  };
  const handleOpenDeleteModal = (tagId: string) => {
    setSelectedTagId(tagId);
    setIsTagsDeleteModalOpen(true);
  };
  const handleCloseDeleteModal = () => {
    setIsTagsDeleteModalOpen(false);
  };

  return (
    <>
      <BackButton onClick={handleNavigate} />
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-cp-font font-black text-xl text-rhyth-gray tracking-widest">登録しているタグ一覧</h1>
          <TagsNewButton onClick={handleOpenNewModal} />
        </div>
        <div className="text-rhyth-dark-blue">
          {tagItems?.length ? (
            <ul className="text-md font-bold bg-white border-2 border-rhyth-light-gray shadow-md">
              {tagItems.map((item) => (
                <TagsItem
                  key={item.id}
                  name={item.name}
                  color={item.color}
                  handleOpenEditModal={() => handleOpenEditModal(item.id)}
                  handleOpenDeleteModal={() => handleOpenDeleteModal(item.id)}
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
        <TagsEditModal modalType="タグ編集" closeModal={handleCloseEditModal} tagId={selectedTagId ?? ""} />
      )}
      {isTagsDeleteModalOpen && (
        <ConfirmModal
          text="本当にこのタグを削除しますか？"
          confirmBtnText="タグを削除する"
          cancelBtnText="キャンセルする"
          btnColor="red"
          onAction={onDeleteTag}
          closeModal={handleCloseDeleteModal}
        />
      )}
      {isTagsNewModalOpen && <TagsNewModal modalType="タグ作成" handleCloseNewModal={handleCloseNewModal} />}
    </>
  );
};
