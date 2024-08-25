import type { FC } from "react";
import { BadgeIcon, BellIcon, RankingIcon, SearchIcon, TagIcon } from "../icons/header";

type Icon = "Bell" | "Tag" | "Search" | "Badge" | "Ranking";

const selectedIcon = (icon: Icon) => {
  switch (icon) {
    case "Bell":
      return <BellIcon />;
    case "Tag":
      return <TagIcon />;
    case "Search":
      return <SearchIcon />;
    case "Badge":
      return <BadgeIcon />;
    case "Ranking":
      return <RankingIcon />;
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
