import { FC } from "react";

type Props = {
  status: "CLOSED" | "SUCCESS" | "FAILED";
};

export const QuestStatusTag: FC<Props> = ({ status }) => {
  return status === "CLOSED" ? (
    <div className="w-[70px] bg-white font-bold border-2 border-gray-400 px-2 py-1 rounded-md text-center">未開放</div>
  ) : status === "SUCCESS" ? (
    <div className="w-[70px] bg-white font-bold border-2 border-green-400 px-2 py-1 rounded-md text-center">成功</div>
  ) : (
    <div className="w-[70px] bg-white font-bold border-2 border-red-400 px-2 py-1 rounded-md text-center">失敗</div>
  );
};
