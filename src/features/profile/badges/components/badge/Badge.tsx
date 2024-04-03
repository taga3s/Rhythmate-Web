import { FC } from "react";
import { BadgeFrame } from "./BadgeFrame";
import { BadgeSparkling } from "./BadgeSparkling";
import { BadgeItem } from "./BadgeItem";

type Props = {
  imageType: string;
  frameClassName: string;
  sparklingClassName: string;
  itemClassName: string;
};

export const Badge: FC<Props> = ({ imageType, frameClassName, sparklingClassName, itemClassName }) => {
  return (
    <div className="relative w-full h-full overflow-hidden drop-shadow-lg">
      <BadgeSparkling className={`absolute z-30 ${sparklingClassName}`} />
      <BadgeFrame className={`absolute z-20 scale-125 ${frameClassName}`} />
      <BadgeItem imageType={imageType} className={`absolute z-10 scale-50 ${itemClassName}`} />
    </div>
  );
};
