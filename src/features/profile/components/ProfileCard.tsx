import type { FC } from "react";
import { useQueryBadgeList } from "../badges/api/badge/useQueryBadge";
import { Badge } from "../badges/components/badge/Badge";

type Props = {
  userName: string;
  imageUrl: string;
  currentLevel: number;
};

export const ProfileCard: FC<Props> = ({ userName, imageUrl, currentLevel }) => {
  const { data: badgeList } = useQueryBadgeList();
  const pinnedBadgeList = badgeList.filter((badge) => badge.isPinned) ?? [];

  return (
    // <div className="w-screen justify-center pt-24 -mt-24 pb-8 bg-white bg-cover bg-[url('/bg-geometric2.png')] border border-gray-200 shadow">
    <div className="w-full justify-center p-4 bg-white bg-cover border rounded-lg border-gray-200 shadow">
      <div className="flex md:px-8 pt-8 pb-4 justify-between items-center box-border">
        <div className="w-32 h-32">
          <img src={imageUrl} alt="プロフィール画像" className="w-full h-auto rounded-full" />
        </div>
        <div className="flex flex-col text-rhyth-dark-blue">
          <p className="text-3xl font-extrabold text-right">{userName}</p>
          <div className="flex justify-end items-end gap-3 focus:outline-none focus:ring-4 font-extrabold text-2xl">
            <div className="text-base">Lv. </div>
            <div>{currentLevel}</div>
          </div>
        </div>
      </div>
      <div>
        {pinnedBadgeList.length > 0 && (
          <div className="w-full flex justify-end">
            {pinnedBadgeList?.map((badge) => {
              return (
                <div className="flex flex-col gap-2" key={badge.id}>
                  <div className="h-12">
                    <Badge imageType={badge.imageType} frameColor={badge.frameColor} />
                  </div>
                  <span className="text-xs">{badge.name}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
