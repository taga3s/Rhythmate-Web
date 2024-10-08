import { Link } from "@tanstack/react-router";
import { EditIcon } from "../../common/components";

export const ProfileUserSettingsModalButton = () => {
  return (
    <Link to="/profile/settings">
      <div className="block text-sm font-medium text-rhyth-black bg-white hover:bg-rhyth-hover-light-gray border border-gray-200 rounded-t-lg shadow w-full h-hull">
        <div className="px-4 py-3 flex gap-6 items-center">
          <div className="w-[32px] h-[32px] text-rhyth-black">
            <EditIcon />
          </div>
          <p className="text-lg font-bold">ユーザー設定</p>
        </div>
      </div>
    </Link>
  );
};
