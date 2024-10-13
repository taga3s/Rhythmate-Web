import type { FC } from "react";
import { useQueryBadgeList } from "../../badges/hooks/useQueryBadge";
import { Badge } from "../../badges/components/badge/Badge";
import { calcAccumulatedExp } from "../calcAccumulaetdExp";

type Props = {
  userName: string;
  imageUrl: string;
  currentLevel: number;
  exp: number;
};

export const ProfileCard: FC<Props> = ({ userName, imageUrl, currentLevel, exp }) => {
  const { data: badgeList } = useQueryBadgeList();
  const pinnedBadgeList = badgeList.filter((badge) => badge.isPinned) ?? [];
  const { expBarProportion, remainingExp, toNextLevel, level } = calcAccumulatedExp(currentLevel, exp);

  return (
    <div className="w-full gap-4 p-4 bg-white bg-cover border rounded-lg border-gray-200 shadow">
      {/* 基本情報 */}
      <div className="flex md:px-8  justify-between items-center box-border">
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
      {/* 経験値メーター */}
      <div className="w-full flex flex-col gap-1.5 mt-4">
        <p className="font-bold">経験値</p>
        <div className="w-full bg-rhyth-bg-dark-gray rounded-full h-3">
          <div style={{ width: `${expBarProportion}%` }}>
            <div className="bg-rhyth-green h-3 rounded-full animate-expbar" />
          </div>
        </div>
        <p className="text-end text-xs">あと{toNextLevel * level - remainingExp}Expでレベルアップ</p>
      </div>
      {/* バッジ */}
      {pinnedBadgeList.length > 0 && (
        <div className="flex flex-col gap-4 mt-8">
          <p className="font-bold">獲得バッジ</p>
          <div className="w-full flex">
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
        </div>
      )}
    </div>
  );
};
