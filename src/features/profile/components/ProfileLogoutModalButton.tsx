import type { FC } from "react";
import { ExitIcon } from "../../common/components";

type Props = {
  onClickFn: () => void;
};

export const ProfileLogoutModalButton: FC<Props> = ({ onClickFn }) => {
  return (
    <div className="w-full text-sm font-medium text-rhyth-black bg-white hover:bg-rhyth-hover-light-gray border border-gray-200 rounded-b-lg shadow">
      <button type="button" onClick={onClickFn} className="block w-full h-hull">
        <div className="px-4 py-3 flex gap-6 items-center">
          <div className="w-[32px] h-[32px] text-rhyth-red">
            <ExitIcon />
          </div>
          <p className="text-lg text-red-600 font-bold">ログアウト</p>
        </div>
      </button>
    </div>
  );
};
