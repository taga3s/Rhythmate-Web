import { FC } from "react";
import { Badge } from "./badge/Badge";
import { useMutateBadge } from "../api/badge/hooks/useMutateBadge";

type Props = {
  id: string;
  name: string;
  description: string;
  imageDir: string;
  obtainedAt: string;
  isPinned: boolean;
};

export const BadgeCard: FC<Props> = (props) => {
  const { id, name, description, imageDir, obtainedAt, isPinned } = props;
  const { pinBadgeMutation, unpinBadgeMutation } = useMutateBadge();

  return (
    <div className="w-full h-full bg-white border border-[#AAAAAA] border-solid rounded-lg shadow key={badgeId}">
      <div className="h-full flex gap-3 p-3">
          <div className="w-1/3 h-100 flex-row">
            <Badge 
              imageType={imageDir} 
              frameClassName="" 
              sparklingClassName="" 
              itemClassName="" 
            />
          </div>
          <div className="w-2/3 h-full flex-row ">
            <div className="flex justify-end">達成日: {obtainedAt}</div>
            <div className="flex items-center text-2xl">{name}</div>
            <div className="flex items-center text-xl">{description}</div>
            <div className="flex justify-end mt-2">
              {isPinned ? (
                <button
                  className="w-30 px-4 py-2 text-white bg-red-500 rounded-lg"
                  onClick={() => unpinBadgeMutation.mutate({ id })}
                >
                  ピン留め解除
                </button>
              ) : (
                <button
                  className="w-30 px-4 py-2 text-white bg-blue-500 rounded-lg"
                  onClick={() => pinBadgeMutation.mutate({ id })}
                >
                  ピン留め
                </button>
              )}
            </div>
          </div>

      </div>
    </div>
  );
};
