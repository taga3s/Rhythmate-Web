import { useState } from "react";
import { useQueryLoginUser } from "../hooks/useQueryUser";
import { ProfileCard } from "../components/ProfileCard";
import { ProfileLogoutModal } from "../components/ProfileLogoutModal";
import { Link } from "@tanstack/react-router";
import { BadgeIcon, EditIcon, ExitIcon } from "../../common/components";

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
        <ProfileCard
          userName={loginUser?.name}
          imageUrl={loginUser?.imageUrl}
          currentLevel={loginUser?.level ?? 1}
          exp={loginUser?.exp ?? 0}
        />
        <div className="w-full">
          <Link to="/profile/settings">
            <div className="block text-sm font-medium text-rhyth-black bg-white hover:bg-rhyth-hover-light-gray border border-gray-200 rounded-t-lg shadow w-full h-hull">
              <div className="px-4 py-3 flex gap-6 items-center">
                <div className="w-8 h-8 text-rhyth-dark-blue">
                  <EditIcon />
                </div>
                <p className="text-lg font-bold">ユーザー設定</p>
              </div>
            </div>
          </Link>
          <Link to="/profile/badges">
            <div className="block text-sm font-medium text-rhyth-black bg-white hover:bg-rhyth-hover-light-gray border border-gray-200 shadow w-full h-hull">
              <div className="px-4 py-3 flex gap-6 items-center">
                <div className="w-8 h-8 text-rhyth-orange">
                  <BadgeIcon />
                </div>
                <p className="text-lg font-bold">獲得バッジ一覧</p>
              </div>
            </div>
          </Link>
          <div className="w-full text-sm font-medium text-rhyth-black bg-white hover:bg-rhyth-hover-light-gray border border-gray-200 rounded-b-lg shadow">
            <button type="button" onClick={openLogoutModal} className="block w-full h-hull">
              <div className="px-4 py-3 flex gap-6 items-center">
                <div className="w-8 h-8 text-rhyth-red">
                  <ExitIcon />
                </div>
                <p className="text-lg text-red-600 font-bold">ログアウト</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      {isLogoutModalOpen && <ProfileLogoutModal onClickFn={closeLogoutModal} />}{" "}
    </>
  );
};
