import { FC } from "react";
import { Bow } from "./badgeItems/Bow";
import { Cat } from "./badgeItems/Cat";
import { Crown } from "./badgeItems/Crown";
import { Gem } from "./badgeItems/Gem";
import { Horse } from "./badgeItems/Horse";
import { Shield } from "./badgeItems/Shield";
import { Sword } from "./badgeItems/Sword";

type Props = {
  imageType: string;
  className: string;
};

export const BadgeItem: FC<Props> = ({ imageType, className }) => {
  switch (imageType) {
    case "Bow":
      return <Bow className={className} />;
    case "Cat":
      return <Cat className={className} />;
    case "Crown":
      return <Crown className={className} />;
    case "Gem":
      return <Gem className={className} />;
    case "Horse":
      return <Horse className={className} />;
    case "Shield":
      return <Shield className={className} />;
    case "Sword":
      return <Sword className={className} />;
  }
};
