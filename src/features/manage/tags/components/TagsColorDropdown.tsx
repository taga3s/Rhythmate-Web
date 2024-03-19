import { FC } from "react";
import { TagsColorItem } from "./TagsColorItem";

type Props = {
  onCloseFn: () => void;
};

export const TagsColorDropdown: FC<Props> = ({ onCloseFn }) => {
  return (
    <div
      id="dropdownDivider"
      className="z-[100] bg-white divide-y border-b border-rhyth-light-gray rounded-lg shadow w-full"
    >
      <ul className="text-sm text-gray-700" aria-labelledby="dropdownDividerButton">
        <TagsColorItem color="Blue" onCloseFn={onCloseFn} />
        <TagsColorItem color="Green" onCloseFn={onCloseFn} />
        <TagsColorItem color="Red" onCloseFn={onCloseFn} />
        <TagsColorItem color="Purple" onCloseFn={onCloseFn} />
        <TagsColorItem color="Orange" onCloseFn={onCloseFn} />
        <TagsColorItem color="Yellow" onCloseFn={onCloseFn} />
        <TagsColorItem color="LightBlue" onCloseFn={onCloseFn} />
      </ul>
    </div>
  );
};
