import { TagsItem } from "./TagsItem";

export const TagsPresenter = () => {
  return (
    <>
      <h1 className="font-black text-lg text-rhyth-gray mb-2">タグ管理</h1>
      <div>
        <ul className="text-md font-bold text-rhyth-dark-blue bg-white border-2 border-rhyth-light-gray rounded-lg">
          <TagsItem />
          <TagsItem />
        </ul>
      </div>
    </>
  );
};
