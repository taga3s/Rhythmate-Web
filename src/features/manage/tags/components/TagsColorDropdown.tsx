import { FC } from "react";
import { TagsColorItem } from "./TagsColorItem";

type Props = {
  onCloseFn: () => void;
  selectFn: (color: string) => void;
};

export const TagsColorDropdown: FC<Props> = ({ onCloseFn, selectFn }) => {
  return (
    <div
      id="dropdownDivider"
      className="z-[100] bg-white divide-y border-b border-rhyth-light-gray rounded-lg shadow w-full"
    >
      <ul className="text-sm text-gray-700" aria-labelledby="dropdownDividerButton">
        <TagsColorItem color="Blue" onCloseFn={onCloseFn} selectFn={selectFn} />
        <TagsColorItem color="Green" onCloseFn={onCloseFn} selectFn={selectFn} />
        <TagsColorItem color="Red" onCloseFn={onCloseFn} selectFn={selectFn} />
        <TagsColorItem color="Purple" onCloseFn={onCloseFn} selectFn={selectFn} />
        <TagsColorItem color="Orange" onCloseFn={onCloseFn} selectFn={selectFn} />
        <TagsColorItem color="Yellow" onCloseFn={onCloseFn} selectFn={selectFn} />
        <TagsColorItem color="LightBlue" onCloseFn={onCloseFn} selectFn={selectFn} />
      </ul>
    </div>
  );
};
