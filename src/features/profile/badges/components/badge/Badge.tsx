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
    <div className="relative">
      <BadgeFrame className={`absolute z-30 ${frameClassName}`} />
      <BadgeSparkling className={`absolute z-20 ${sparklingClassName}`} />
      <BadgeItem imageType={imageType} className={`absolute z-10 p-8${itemClassName}`} />
    </div>
  );
};
