import { useNavigate } from "@tanstack/react-router";
import { BackButton } from "../../common/components/BackButton";
import { useQueryBadgeList } from "../hooks/useQueryBadge";
import { BadgeCard } from "../components/BadgeCard";

export const BadgesPresenter = () => {
  const navigation = useNavigate();
  const { data: badgeList } = useQueryBadgeList();

  const handleNavigate = () => {
    navigation({ to: "/profile" });
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col space-y-5 w-full">
        <div className="flex justify-start gap-3">
          <BackButton onClick={handleNavigate} />
        </div>
        <p className="flex text-2xl justify-center font-bold">獲得バッジ一覧</p>
      </div>
      <ul className="flex flex-col items-center mt-3 gap-3 w-full h-full">
        {badgeList?.map((badge) => {
          return (
            <BadgeCard
              key={badge.id}
              id={badge.id}
              name={badge.name}
              description={badge.description}
              imageType={badge.imageType}
              frameColor={badge.frameColor}
              isPinned={badge.isPinned}
              obtainedAt={badge.obtainedAt}
              unlockable={badge.unlockable}
            />
          );
        })}
      </ul>
    </div>
  );
};
