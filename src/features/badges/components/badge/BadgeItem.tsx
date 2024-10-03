import type { FC } from "react";
import { Bow } from "./badgeItems/Bow";
import { Cat } from "./badgeItems/Cat";
import { Crown } from "./badgeItems/Crown";
import { Gem } from "./badgeItems/Gem";
import { Horse } from "./badgeItems/Horse";
import { Shield } from "./badgeItems/Shield";
import { Sword } from "./badgeItems/Sword";
import type { ImageType } from "../../../../api/badge/type";

type Props = {
  imageType: ImageType;
  className: string;
};

export const BadgeItem: FC<Props> = ({ imageType, className }) => {
  switch (imageType) {
    case "bow":
      return <Bow className={className} />;
    case "cat":
      return <Cat className={className} />;
    case "crown":
      return <Crown className={className} />;
    case "gem":
      return <Gem className={className} />;
    case "horse":
      return <Horse className={className} />;
    case "shield":
      return <Shield className={className} />;
    case "sword":
      return <Sword className={className} />;
  }
};
