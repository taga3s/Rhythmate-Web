import { FC } from "react";
import { BadgeFlame } from "./BadgeFlame";
import { BadgeSparkling } from "./BadgeSparkling";
import { BadgeItem } from "./BadgeItem";

type Props = {
  imageType: string;
  flameClassName: string;
  sparklingClassName: string;
  itemClassName: string;
};

export const Badge: FC<Props> = ({ imageType, flameClassName, sparklingClassName, itemClassName }) => {
  return (
    <div className="relative">
      <BadgeFlame className={flameClassName} />
      <BadgeSparkling className={`absolute ${sparklingClassName}`} />
      <BadgeItem imageType={imageType} className={`absolute ${itemClassName}`} />
    </div>
  );
};
