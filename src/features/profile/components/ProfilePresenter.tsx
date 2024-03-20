import { useState } from "react";
import { Loading } from "../../common/components/Loading";
import { LoadingContainer } from "../../common/components/LoadingContainer";
import { useQueryLoginUser } from "../api/user/hooks/useQueryUser";
import { ProfileLogoutModal } from "./ProfileLogoutModal";
import { ProfileLogoutModalButton } from "./ProfileLogoutModalButton";
import { ProfileUserSettingsModal } from "./ProfileUserSettingModal";

export const ProfilePresenter = () => {
  const { data: loginUser, isLoading } = useQueryLoginUser();
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

  return (
    <>
      {isLoading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <div className="flex flex-col items-center gap-5 mx-auto">
          <div className="w-full p-5 bg-white border border-gray-200 rounded-lg shadow">
            {/* <div className="flex justify-end">
              <ProfileUserSettingsModalButton onClickFn={openSettingsModal} />
            </div> */}
            <div className="flex justify-between gap-4 box-border mb-4">
              <img src={profileDefaultImage} alt="プロフィール画像" className="w-1/4 h-1/4 rounded-full" />

              <div className="flex flex-col justify-center text-right break-all font-extrabold text-[#004479]">
                <h1 className="text-xl">{loginUser?.name}</h1>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="flex items-end gap-7 text-white bg-[#1EA1FF] focus:outline-none focus:ring-4 font-extrabold text-3xl px-3 py-2 mb-2 -ml-5">
                <div className="text-base">Lv. </div>
                {/* {loginUser?.level} */}
                <div>10</div>
              </div>
            </div>

            {/* <div className="flex justify-end">
              <div className="inline-block text-white bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-1 text-center mb-2">
                Lv. {loginUser?.level}
              </div>
            </div> */}
            {/* <div>
              <div className="w-full h-4 mb-2 bg-gray-200 rounded-full">
                <div className="h-4 bg-red-600 rounded-full"></div>
              </div>
            </div>
            <p className="text-xs text-right">あと〇〇Expでレベルアップ</p> */}
          </div>
          <div className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
            <ProfileLogoutModalButton onClickFn={openLogoutModal} />
          </div>
        </div>
      )}
      {isSettingsModalOpen && (
        <ProfileUserSettingsModal username={loginUser?.name ?? ""} onClickFn={closeSettingsModal} />
      )}
      {isLogoutModalOpen && <ProfileLogoutModal onClickFn={closeLogoutModal} />}
    </>
  );
};
