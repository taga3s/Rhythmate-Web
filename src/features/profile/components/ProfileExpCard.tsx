import type { FC } from "react";
import { profileExpCalculation } from "../funcs/profileExpCalculation";

type Props = {
  currentLevel: number;
  exp: number;
};
export const ProfileExpCard: FC<Props> = ({ currentLevel, exp }) => {
  const { expBarProportion, remainingExp, toNextLevel, level } = profileExpCalculation(currentLevel, exp);
  return (
    <div className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg shadow flex flex-col gap-1.5">
      <p className="font-bold">経験値</p>
      <div className="w-full bg-rhyth-bg-dark-gray rounded-full h-3">
        <div style={{ width: `${expBarProportion}%` }}>
          <div className="bg-rhyth-green h-3 rounded-full animate-expbar" />
        </div>
      </div>
      <p className="text-end text-xs">あと{toNextLevel * level - remainingExp}Expでレベルアップ</p>
    </div>
  );
};
