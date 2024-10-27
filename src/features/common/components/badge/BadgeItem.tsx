import type { FC } from "react";
import { Bow } from "./assets/Bow";
import { Cat } from "./assets/Cat";
import { Crown } from "./assets/Crown";
import { Gem } from "./assets/Gem";
import { Horse } from "./assets/Horse";
import { Shield } from "./assets/Shield";
import { Sword } from "./assets/Sword";
import type { ImageType } from "../../../../api/badge/types";

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
