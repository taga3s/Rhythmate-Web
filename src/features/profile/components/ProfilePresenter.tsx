import { useState } from "react";
import { Loading, LoadingContainer } from "../../common/components";
import { useQueryLoginUser } from "../api/user/hooks/useQueryUser";
import { ProfileExpCard } from "./ProfileExpCard";
import { ProfileLogoutModal } from "./ProfileLogoutModal";
import { ProfileLogoutModalButton } from "./ProfileLogoutModalButton";
import { ProfileUserSettingsModal } from "./ProfileUserSettingModal";
import { ProfileUserSettingsModalButton } from "./ProfileUserSettingsModalButton";
import { useQueryBadgeList } from "../badges/api/badge/hooks/useQueryBadge";
import { Badge } from "../badges/components/badge/Badge";

export const ProfilePresenter = () => {
  const { data: loginUser, isLoading } = useQueryLoginUser();
  const { data: badgeList } = useQueryBadgeList();
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false);
  const profileDefaultImage = "/assets/profile/profilecat.jpg";

  const openSettingsModal = () => {
    setIsSettingsModalOpen(true);
  };

  const closeSettingsModal = () => {
    setIsSettingsModalOpen(false);
  };
  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };
  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const pinnedBadgeList = badgeList?.filter((badge) => badge.isPinned);

  return (
    <>
      {isLoading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <div className="flex flex-col items-center mx-auto">
          <div className="w-full p-5 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex justify-between gap-4 box-border mb-4">
              <img src={profileDefaultImage} alt="プロフィール画像" className="w-1/4 h-1/4 rounded-full" />
              <div className="flex flex-col justify-center text-right break-all font-extrabold text-[#004479]">
                <h1 className="text-3xl">{loginUser?.name}</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-end gap-7 text-white bg-[#1EA1FF] focus:outline-none focus:ring-4 font-extrabold text-3xl px-3 py-2 mb-2 -ml-5">
                <div className="text-base">Lv. </div>
                <div>{loginUser?.level}</div>
              </div>
              <div className="flex justify-end w-2/3 gap-3">
                {
                pinnedBadgeList?.map((badge) => {
                  return (
                    <div className="flex h-full w-1/3">
                      <Badge 
                      imageType={badge.imageDir} 
                      frameClassName="" 
                      sparklingClassName="" 
                      itemClassName="" 
                      />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
          <ProfileExpCard />
          <ProfileUserSettingsModalButton onClickFn={openSettingsModal} />
          <ProfileLogoutModalButton onClickFn={openLogoutModal} />
        </div>
      )}
      {isSettingsModalOpen && (
        <ProfileUserSettingsModal username={loginUser?.name ?? ""} onClickFn={closeSettingsModal} />
      )}
      {isLogoutModalOpen && <ProfileLogoutModal onClickFn={closeLogoutModal} />}
    </>
  );
};
