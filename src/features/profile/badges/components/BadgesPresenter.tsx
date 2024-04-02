import { BadgesBackButton } from "./BadgesBackButton";
import { useNavigate } from "@tanstack/react-router";
import { useQueryBadgeList } from "../api/badge/hooks/useQueryBadge";
import { BadgeCard } from "./BadgeCard";
import { Loading, LoadingContainer } from "../../../common/components";

export const BadgesPresenter = () => {
  const navigation = useNavigate();
  const navigationToProfile = () => {
    navigation({ to: "/profile" });
  };

  const { data: badgeList, isLoading } = useQueryBadgeList();

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
          <ul className="flex flex-col items-center mt-3 gap-3 w-full h-full">
            {badgeList?.map((badge) => {
              return (
                  <li key={badge.id} className="w-full h-full" >
                      <BadgeCard
                        id={badge.id}
                        name={badge.name}
                        description={badge.description}
                        imageDir={badge.imageType}
                        isPinned={badge.isPinned}
                        obtainedAt={badge.obtainedAt}
                      />
                  </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};
