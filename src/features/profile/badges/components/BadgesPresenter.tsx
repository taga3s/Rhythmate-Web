import { BadgesBackButton } from "./BadgesBackButton";
import { useNavigate } from "@tanstack/react-router";

const badgeFrame: string = "/badges/frame.png";

// 仮のデータ
// import { achievementData } from "../constant/badges";
import { badges } from "../constant/badges";

import { useQueryBadgeList } from "../api/badge/hooks/useQueryBadge";
import { BadgeCard } from "./BadgeCard";
// import { useMutateBadge } from "../api/badge/hooks/useMutateBadge";

export const BadgesPresenter = () => {
  const navigation = useNavigate();
  const navigationToProfile = () => {
    navigation({ to: "/profile" });
  };

  const { data: badgeList, isLoading } = useQueryBadgeList();
  // const { pinBadgeMutation, unpinBadgeMutation } = useMutateBadge();

  return (
    <>
      <div className="flex flex-col items-center w-full mx-auto">
        <div className="flex flex-col space-y-5 w-full">
          <div className="flex justify-start gap-3">
            <BadgesBackButton onClickFn={navigationToProfile} />
          </div>
          <p className="flex text-2xl justify-center font-bold">獲得バッジ一覧</p>
        </div>
        {/* <table className="mt-6 border mx-auto">
          <tbody>
            {badgeList?.map((badge, index) => (
              <tr className="grid grid-flow-row-dense grid-cols-3 gap-3 p-4" key={index}>
                <td className="col-span-1">
                  <img src={achievementData[index].isAchieved === true ? badge.image : badgeFrame} alt={badge.text} />
                </td>
                <td className="flex flex-col col-span-2 ">
                  <div className="flex justify-end">
                    達成日時:
                    {achievementData[index].isAchieved === true ? achievementData[index].achievementDate : "未達成"}
                  </div>
                  <div className="flex items-center text-xl">{badge.text}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <ul className="mt-4 flex flex-col items-center gap-6">
          {badgeList?.map((badge) => {
            return (
              <BadgeCard
                key={badge.id}
                id={badge.id}
                badgeId={badge.badgeId}
                isPinned={badge.isPinned}
                obtainedAt={badge.obtainedAt}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
