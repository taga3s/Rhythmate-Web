import { FC } from "react";
import { Badge } from "./badge/Badge";
import { useMutateBadge } from "../api/badge/hooks/useMutateBadge";
import { FrameColor, ImageType } from "../../../../api/badge/type";
import { BadgeSecret } from "./badge/BadgeSecret";
import { formatDateJP } from "../../../../pkg/util/dayjs";

type Props = {
  id: string;
  name: string;
  description: string;
  imageType: ImageType;
  frameColor: FrameColor;
  obtainedAt: string;
  isPinned: boolean;
  unlockable: boolean;
};

export const BadgeCard: FC<Props> = (props) => {
  const { id, name, description, imageType, frameColor, obtainedAt, isPinned, unlockable } = props;
  const { achieveBadgeMutation, pinBadgeMutation, unpinBadgeMutation } = useMutateBadge();

  return (
    <div className="flex items-center gap-3 p-3 w-full min-h-[148px] bg-white border-2 border-rhyth-light-gray border-solid rounded-lg shadow">
      <div className="w-1/3 h-[100px] flex-row">
        {obtainedAt ? <Badge imageType={imageType} frameColor={frameColor} /> : <BadgeSecret />}
      </div>
      <div className="w-2/3 h-full flex-row ">
        {obtainedAt && <span className="flex justify-end text-sm">達成日: {formatDateJP(obtainedAt)}</span>}
        <span className="block text-xl font-bold">{obtainedAt ? name : "???"}</span>
        <span className="block text-md">{description}</span>
        <div className="flex justify-end mt-2">
          {obtainedAt ? (
            <div>
              {isPinned ? (
                <button
                  className="w-30 px-4 py-2 text-white bg-rhyth-red rounded-lg"
                  onClick={() => unpinBadgeMutation.mutate({ badgeId: id })}
                >
                  ピン留め解除
                </button>
              ) : (
                <button
                  className="w-30 px-4 py-2 text-white bg-rhyth-light-blue rounded-lg"
                  onClick={() => pinBadgeMutation.mutate({ badgeId: id })}
                >
                  ピン留め
                </button>
              )}
            </div>
          ) : (
            <button
              className={`w-30 px-4 py-2 text-white rounded-lg ${unlockable ? "bg-rhyth-blue" : "bg-rhyth-light-gray"}`}
              onClick={() => achieveBadgeMutation.mutate({ badgeId: id })}
              disabled={!unlockable}
            >
              {unlockable ? "解放する" : "未開放"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
