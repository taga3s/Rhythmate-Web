import type { FC } from "react";
import type { UseFormRegister, UseFormWatch } from "react-hook-form";
import { TagItem } from "./TagItem";
import type { TManageValidationSchema } from "../../common/validation";
import { useQueryTagList } from "../../../tags/hooks/useQueryTag";
import { toRhythTextColor } from "../../../common/utils";

type Props = {
  register: UseFormRegister<TManageValidationSchema>;
  watch: UseFormWatch<TManageValidationSchema>;
};

export const TagDropdown: FC<Props> = ({ register, watch }) => {
  const { data: tagItems } = useQueryTagList();
  const tagId = watch("tagId");
  const selectedTag = tagItems?.find((item) => item.id === tagId);

  return (
    <>
      {tagItems?.length ? (
        <select
          className={`w-full p-2 mt-4 border-2 rounded-md bg-white ${toRhythTextColor(selectedTag?.color ?? "")}`}
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
            <TagItem key={item.id} tagId={item.id} tagName={item.name} />
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
