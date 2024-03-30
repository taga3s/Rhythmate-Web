import { FC } from "react";
import { Badge } from "./badge/Badge";

type Props = {
  id: string;
  badgeId: string;
  name: string;
  description: string;
  imageDir: string;
  obtainedAt: string;
  isPinned: boolean;
};

export const BadgeCard: FC<Props> = (props) => {
  const { id, badgeId, name, description, imageDir, obtainedAt, isPinned } = props;
  return (
    <div className="w-full h-full bg-white border border-[#AAAAAA] border-solid rounded-lg shadow">
      <div className="h-32 grid grid-flow-row-dense grid-cols-3 gap-3 p-2" key={badgeId}>
        <div className="h-auto col-span-1">
          {/* <img src={imageDir} alt={badgeId} /> */}
          <Badge imageType={imageDir} flameClassName="" sparklingClassName="" itemClassName="" />
        </div>
        <div className="flex flex-col col-span-2 ">
          <div className="flex justify-end">達成日: {obtainedAt}</div>
          <div className="flex items-center text-xl">{name}</div>
          <div className="flex items-center text-xl">{description}</div>
        </div>
      </div>
    </div>
  );
};
