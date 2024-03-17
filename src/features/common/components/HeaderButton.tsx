import { FC } from "react";
import { BellIcon } from "./icons/header/BellIcon";
import { TagIcon } from "./icons/header/TagIcon";
import { SearchIcon } from "./icons/header/SearchIcon";
import { BadgeIcon } from "./icons/header/BadgeIcon";
import { RankingIcon } from "./icons/header/RankingIcon";

type Props = {
  icon: string;
};

export const HeaderButton: FC<Props> = ({ icon }) => {
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
    <button type="button" className="w-16 h-full flex justify-center items-center border-l-2 border-rhyth-light-gray">
      {selectIcon(icon)}
    </button>
  );
};
