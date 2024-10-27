import type { FC } from "react";
import { HonoIcon } from "../../common/components";

type Props = {
  status: "CLOSED" | "SUCCESS" | "FAILED";
  exp: number;
};

export const QuestStatus: FC<Props> = ({ status, exp }) => {
  return status === "CLOSED" ? (
    <div className="w-[70px] flex items-center justify-center bg-rhyth-red text-white tracking-widest font-bold px-2 py-1 rounded-r-md shadow-md font-cp-font">
      <div className="w-6 h-6 text-rhyth-orange">
        <HonoIcon />
      </div>
      <span className="text-white text-md">{exp}</span>
    </div>
  ) : status === "SUCCESS" ? (
    <div className="w-[70px] flex items-center justify-center bg-rhyth-green text-white tracking-widest font-bold px-2 py-1 rounded-r-md shadow-md font-cp-font">
      成功
    </div>
  ) : (
    <div className="w-[70px] flex items-center justify-center bg-rhyth-red text-white tracking-widest font-bold rounded-r-md shadow-md font-cp-font">
      失敗
    </div>
  );
};
