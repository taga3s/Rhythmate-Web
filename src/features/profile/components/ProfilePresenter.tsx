import { useState } from "react";
import { ProfileUserSettingsModalButton } from "./ProfileUserSettingsModalButton";
import { ProfileUserSettingsModal } from "./ProfileUserSettingModal";
import { ProfileLogoutModalButton } from "./ProfileLogoutModalButton";
import { ProfileBadgesButton } from "./ProfileBadgesButton";
import { ProfileLogoutModal } from "./ProfileLogoutModal";
import { useQueryLoginUser } from "../api/user/hooks/useQueryUser";

export const ProfilePresenter = () => {
  const { data: loginUser } = useQueryLoginUser();
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false);

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

  return (
    <>
      <div className="flex flex-col items-center gap-5 mx-auto">
        <div className="w-full p-5 bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex justify-end">
            <ProfileUserSettingsModalButton onClickFn={openSettingsModal} />
          </div>
          <div className="flex justify-between gap-4">
            <div>
              <svg
                className="w-[96px] h-[96px] text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center text-right">
              <div>
                <h1 className="text-xl">{loginUser?.name}</h1>
                <p className="text-sm text-gray-400">{loginUser?.email}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="inline-block text-white bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-1 text-center mb-2">
              Lv. {loginUser?.level}
            </div>
          </div>
          <div>
            <div className="w-full h-4 mb-2 bg-gray-200 rounded-full">
              <div className="h-4 bg-red-600 rounded-full"></div>
            </div>
          </div>
          <p className="text-xs text-right">あと〇〇Expでレベルアップ</p>
        </div>
        <div className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
          <ProfileLogoutModalButton onClickFn={openLogoutModal} />
        </div>
        <div className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
          <ProfileBadgesButton />
        </div>
      </div>
      {isSettingsModalOpen && (
        <ProfileUserSettingsModal username={loginUser?.name ?? ""} onClickFn={closeSettingsModal} />
      )}
      {isLogoutModalOpen && <ProfileLogoutModal onClickFn={closeLogoutModal} />}
    </>
  );
};
