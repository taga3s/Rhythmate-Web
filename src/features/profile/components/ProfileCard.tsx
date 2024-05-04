import { FC } from "react";
import { useQueryBadgeList } from "../badges/api/badge/hooks/useQueryBadge";
import { Badge } from "../badges/components/badge/Badge";

type Props = {
  userName: string;
  imageUrl: string;
  currentLevel: number;
};

export const ProfileCard: FC<Props> = ({ userName, imageUrl, currentLevel }) => {
  const { data: badgeList } = useQueryBadgeList();
  const pinnedBadgeList = badgeList?.filter((badge) => badge.isPinned) ?? [];

  return (
    <div className="w-screen pt-16 -mt-16 p-5 bg-rhyth-light-blue  bg-left border border-gray-200 rounded-b-lg shadow">
      <div className="flex justify-between items-center gap-4 box-border">
        <div className="w-20 md:w-32 h-20 md:h-32">
          <img src={imageUrl} alt="プロフィール画像" className="w-full h-full rounded-full" />
        </div>
        <p className="text-3xl font-extrabold text-rhyth-dark-blue">{userName}</p>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex items-end gap-7 text-white bg-rhyth-light-blue focus:outline-none focus:ring-4 font-extrabold text-3xl px-3 py-2 mb-2 -ml-5">
          <div className="text-base">Lv. </div>
          <div>{currentLevel}</div>
        </div>
        <div className="flex justify-end w-2/3 gap-3">
          {pinnedBadgeList?.map((badge) => {
            return (
              <div className="flex h-full w-1/3" key={badge.id}>
                <Badge imageType={badge.imageType} frameColor={badge.frameColor} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
