import { useState } from "react";
import { Loading, LoadingContainer } from "../../common/components";
import { useQueryLoginUser } from "../api/user/hooks/useQueryUser";
import { useQueryBadgeList } from "../badges/api/badge/hooks/useQueryBadge";
import { Badge } from "../badges/components/badge/Badge";
import { ProfileExpCard } from "./ProfileExpCard";
import { ProfileLogoutModal } from "./ProfileLogoutModal";
import { ProfileLogoutModalButton } from "./ProfileLogoutModalButton";
import { ProfileUserSettingsModalButton } from "./ProfileUserSettingsModalButton";

export const ProfilePresenter = () => {
  const { data: loginUser, isLoading } = useQueryLoginUser();
  const { data: badgeList } = useQueryBadgeList();

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false);

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const pinnedBadgeList = badgeList?.filter((badge) => badge.isPinned) ?? [];

  return (
    <>
      {isLoading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <div className="w-full p-5 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex justify-between gap-4 box-border mb-4">
              <div className="max-w-[220px] w-1/4 max-h-[220px] h-1/4">
                <img src={loginUser?.imageUrl} alt="プロフィール画像" className="w-full h-full rounded-full" />
              </div>
              <div className="flex flex-col justify-center text-right break-all font-extrabold text-rhyth-dark-blue">
                <h1 className="text-3xl">{loginUser?.name}</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-end gap-7 text-white bg-rhyth-light-blue focus:outline-none focus:ring-4 font-extrabold text-3xl px-3 py-2 mb-2 -ml-5">
                <div className="text-base">Lv. </div>
                <div>{loginUser?.level}</div>
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
          <ProfileExpCard currentLevel={loginUser?.level ?? 1} exp={loginUser?.exp ?? 0} />
          <div className="w-full">
            <ProfileUserSettingsModalButton />
            <ProfileLogoutModalButton onClickFn={openLogoutModal} />
          </div>
        </div>
      )}
      {isLogoutModalOpen && <ProfileLogoutModal onClickFn={closeLogoutModal} />}
    </>
  );
};
