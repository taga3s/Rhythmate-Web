import { Image } from "@unpic/react";

export const QuestBoardNoData = () => {
  return (
    <div className="w-full min-h-[240px] p-3 shadow-lg rounded-lg flex flex-col items-center justify-center bg-white">
      <div className="relative">
        <Image src="/icons/like.png" layout="constrained" width={80} height={80} alt="like icon" />
        <span className="font-cp-font absolute top-1 right-[-3.8rem] text-rhyth-blue tracking-widest origin-top-left rotate-[20deg]">
          Good!
        </span>
      </div>
      <span className="font-bold text-center p-2 text-rhyth-dark-blue">
        今日のクエストは終了しました。
        <br />
        お疲れさまでした!
      </span>
    </div>
  );
};
