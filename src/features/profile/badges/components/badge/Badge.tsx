import { FC } from "react";
import { BadgeFrame } from "./BadgeFrame";
import { BadgeSparkling } from "./BadgeSparkling";
import { BadgeItem } from "./BadgeItem";
import { FrameColor, ImageType } from "../../../../../api/badge/type";

type Props = {
  imageType: ImageType;
  frameColor: FrameColor;
};

export const Badge: FC<Props> = ({ imageType, frameColor }) => {
  return (
    <div className="relative w-full h-full overflow-hidden drop-shadow-lg">
      <BadgeSparkling className={`absolute z-30`} />
      <BadgeFrame frameColor={frameColor} className={`absolute z-20 scale-125`} />
      <BadgeItem imageType={imageType} className={`absolute z-10 scale-50`} />
    </div>
  );
};
