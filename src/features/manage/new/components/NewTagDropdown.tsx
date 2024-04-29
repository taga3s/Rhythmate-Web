import type { FC } from "react";
import type { UseFormRegister, UseFormWatch } from "react-hook-form";
import { TagItem } from "../../common/components/TagItem";
import type { TManageValidationSchema } from "../../common/libs/validation";
import { useQueryTagList } from "../../tags/api/tag/hooks/useQueryTag";

type Props = {
  register: UseFormRegister<TManageValidationSchema>;
  watch: UseFormWatch<TManageValidationSchema>;
};

export const NewTagDropdown: FC<Props> = ({ register, watch }) => {
  const { data: tagItems } = useQueryTagList();
  const tagIdForColorSelect = watch("tagId");

  const selectColorLabel = (tagId: string | undefined) => {
    const selectTagItem = tagItems?.find((tagItem) => tagItem.id === tagId);
    switch (selectTagItem?.color) {
      case "Blue":
        return "text-rhyth-blue";
      case "Green":
        return "text-rhyth-green";
      case "Red":
        return "text-rhyth-red";
      case "Purple":
        return "text-rhyth-purple";
      case "Orange":
        return "text-rhyth-orange";
      case "Yellow":
        return "text-rhyth-yellow";
      case "LightBlue":
        return "text-rhyth-light-blue";
      default:
        return "text-rhyth-dark-blue";
    }
  };

  return (
    <>
      {tagItems?.length ? (
        <select
          className={`w-full border-2 p-2 rounded-md mt-4 ${selectColorLabel(tagIdForColorSelect)}`}
          id="new-quest-description"
          {...register("tagId")}
        >
          <option
            className="border-b border-rhyth-light-gray w-full h-hull font-bold flex items-center px-4 py-2 rounded-t-lg text-rhyth-dark-blue"
            value="未選択"
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
