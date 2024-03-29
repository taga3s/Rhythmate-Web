import { FC } from "react";

type Props = {
  id: string;
  badgeId: string;
  obtainedAt: string;
  isPinned: boolean;
};

export const BadgeCard: FC<Props> = (props) => {
  const { id, badgeId, obtainedAt, isPinned } = props;

  return (
    <div className="w-full h-auto  bg-white border border-[#AAAAAA] border-solid rounded-lg shadow">
      <div className="grid grid-flow-row-dense grid-cols-3 gap-3 p-4" key={badgeId}>
        <div className="col-span-1">
          <img src={id} alt={badgeId} />
        </div>
        <div className="flex flex-col col-span-2 ">
          <div className="flex justify-end">達成日: {obtainedAt}</div>
          <div className="flex items-center text-xl">{badgeId}</div>
        </div>
      </div>
    </div>
  );
};
