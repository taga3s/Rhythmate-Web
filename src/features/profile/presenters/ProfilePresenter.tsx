import { useState } from "react";
import { useQueryLoginUser } from "../hooks/useQueryUser";
import { ProfileCard } from "../components/ProfileCard";
import { ProfileExpCard } from "../components/ProfileExpCard";
import { ProfileLogoutModal } from "../components/ProfileLogoutModal";
import { ProfileLogoutModalButton } from "../components/ProfileLogoutModalButton";
import { ProfileUserSettingsModalButton } from "../components/ProfileUserSettingsModalButton";

export const ProfilePresenter = () => {
  const { data: loginUser } = useQueryLoginUser();

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false);

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <ProfileCard userName={loginUser?.name} imageUrl={loginUser?.imageUrl} currentLevel={loginUser?.level ?? 1} />
        <ProfileExpCard currentLevel={loginUser?.level ?? 1} exp={loginUser?.exp ?? 0} />
        <div className="w-full">
          <ProfileUserSettingsModalButton />
          <ProfileLogoutModalButton onClickFn={openLogoutModal} />
        </div>
      </div>
      {isLogoutModalOpen && <ProfileLogoutModal onClickFn={closeLogoutModal} />}{" "}
    </>
  );
};
