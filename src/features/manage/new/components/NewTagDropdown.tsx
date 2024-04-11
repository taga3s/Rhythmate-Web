import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { TagItem } from "../../common/components/TagItem";
import { TManageValidationSchema } from "../../common/libs/validation";
import { useQueryTagList } from "../../tags/api/tag/hooks/useQueryTag";
import { Loading, LoadingContainer } from "../../../common/components";

type Props = {
  register: UseFormRegister<TManageValidationSchema>;
  // watch: UseFormWatch<TManageValidationSchema>;
};

export const NewTagDropdown: FC<Props> = ({ register }) => {
  // const tagItem = watch("tagId");
  const { data: tagItems, isLoading } = useQueryTagList();

  return (
    <>
      {isLoading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : tagItems?.length ? (
        <select className={`w-full border-2 p-2 rounded-md mt-4`} id="new-quest-description" {...register("tagId")}>
          <option
            className="border-b border-rhyth-light-gray w-full h-hull font-bold flex items-center px-4 py-2 rounded-t-lg text-rhyth-dark-blue"
            value="未選択"
          >
            未選択
          </option>
          {tagItems.map((item, index) => (
            <TagItem key={index} tagId={item.id} tagName={item.name} tagColor={item.color} />
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
