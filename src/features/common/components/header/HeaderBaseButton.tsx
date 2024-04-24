import type { FC } from "react";
import { BadgeIcon } from "../icons/header/BadgeIcon";
import { BellIcon } from "../icons/header/BellIcon";
import { RankingIcon } from "../icons/header/RankingIcon";
import { SearchIcon } from "../icons/header/SearchIcon";
import { TagIcon } from "../icons/header/TagIcon";

type Icon = "Bell" | "Tag" | "Search" | "Badge" | "Ranking";

type Props = {
  icon: Icon;
  onClickFn: () => void;
};

export const HeaderBaseButton: FC<Props> = ({ icon, onClickFn }) => {
  const selectIcon = (icon: string) => {
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
    }
  };

  return (
    <button
      type="button"
      className="w-16 h-full flex justify-center items-center border-l-2 border-rhyth-light-gray hover:bg-rhyth-hover-light-gray"
      onClick={onClickFn}
    >
      {selectIcon(icon)}
    </button>
  );
};
