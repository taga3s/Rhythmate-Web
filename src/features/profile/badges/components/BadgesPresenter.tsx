import { BadgesBackButton } from "./BadgesBackButton";
import { useNavigate } from "@tanstack/react-router";

// const badgeFrame: string = "/badges/frame.png";

// 仮のデータ
// import { achievementData } from "../constant/badges";
// import { badges } from "../constant/badges";

import { useQueryBadgeList } from "../api/badge/hooks/useQueryBadge";
import { BadgeCard } from "./BadgeCard";
import { Loading, LoadingContainer } from "../../../common/components";
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
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col space-y-5 w-full">
          <div className="flex justify-start gap-3">
            <BadgesBackButton onClickFn={navigationToProfile} />
          </div>
          <p className="flex text-2xl justify-center font-bold">獲得バッジ一覧</p>
        </div>
        {isLoading ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : (
          <ul className="flex flex-col items-center mt-3 gap-3 w-full">
            {badgeList?.map((badge) => {
              return (
                <BadgeCard
                  key={badge.id}
                  id={badge.id}
                  badgeId={badge.badgeId}
                  name={badge.name}
                  description={badge.description}
                  imageDir={badge.imageDir}
                  isPinned={badge.isPinned}
                  obtainedAt={badge.obtainedAt}
                />
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};
