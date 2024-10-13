import type { FC } from "react";
import { SearchIcon, TagIcon } from "../icons";

type Icon = "Bell" | "Tag" | "Search" | "Badge" | "Ranking";

const selectedIcon = (icon: Icon) => {
  switch (icon) {
    case "Tag":
      return (
        <div className="w-7 h-16 text-rhyth-blue">
          <TagIcon />
        </div>
      );
    case "Search":
      return (
        <div className="w-7 h-16 text-rhyth-blue">
          <SearchIcon />
        </div>
      );
    default:
      return <></>;
  }
};

type Props = {
  icon: Icon;
  onClickFn: () => void;
};

export const HeaderBaseButton: FC<Props> = ({ icon, onClickFn }) => {
  return (
    <button
      type="button"
      className="w-16 h-full flex justify-center items-center border-l-2 border-rhyth-light-gray hover:bg-rhyth-hover-light-gray"
      onClick={onClickFn}
    >
      {selectedIcon(icon)}
    </button>
  );
};
