import type { FC } from "react";
import type { UseFormRegister, UseFormWatch } from "react-hook-form";
import { TagItem } from "./TagItem";
import type { TManageValidationSchema } from "../../common/validation";
import { useQueryTagList } from "../../../tags/hooks/useQueryTag";
import { toSelectColorLabel } from "../../common/utils";

type Props = {
  register: UseFormRegister<TManageValidationSchema>;
  watch: UseFormWatch<TManageValidationSchema>;
  tagId?: string;
};

export const TagDropdown: FC<Props> = ({ register, watch, tagId }) => {
  const { data: tagItems } = useQueryTagList();
  const tagIdForColorSelect = watch("tagId");
  const selectColorLabel = toSelectColorLabel(tagItems, tagIdForColorSelect);

  return (
    <>
      {tagItems?.length ? (
        <select
          className={`w-full p-2 mt-4 border-2 rounded-md bg-white ${selectColorLabel}`}
          id="edit-quest-description"
          defaultValue={tagId}
          {...register("tagId")}
        >
          <option
            className="border-b border-rhyth-light-gray w-full h-hull font-bold flex items-center px-4 py-2 rounded-t-lg text-rhyth-dark-blue"
            value=""
          >
            未選択
          </option>
          {tagItems.map((item) => (
            <TagItem key={item.id} tagId={item.id} tagName={item.name} tagColor={item.color} />
          ))}
        </select>
      ) : (
        <div className="w-full p-2 rounded-md mt-4 text-rhyth-dark-blue">
          <span>タグが登録されていません。</span>
          <span>タグ管理から作成できます。</span>
        </div>
      )}
    </>
  );
};
