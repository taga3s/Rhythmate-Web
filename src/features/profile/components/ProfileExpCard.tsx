import { useQueryLoginUser } from "../api/user/hooks/useQueryUser";
import { profileExpCalculation } from "../funcs/profileExpCalculation";

export const ProfileExpCard = () => {
  const { data: loginUser } = useQueryLoginUser();
  const { expBarProportion, remainingExp, toNextLevel, level } = profileExpCalculation(loginUser);
  return (
    <div className="my-4 w-full px-4 py-3 bg-white border border-gray-200 rounded-lg shadow flex flex-col gap-1.5">
      <p className="font-bold">経験値</p>
      <div className="w-full bg-[#F5F5F5] rounded-full h-3">
        <div className="bg-[rgb(40,172,0)] h-3 rounded-full" style={{ width: `${expBarProportion}%` }}></div>
      </div>
      <p className="text-end text-xs">あと{toNextLevel * level - remainingExp}Expでレベルアップ</p>
    </div>
  );
};
