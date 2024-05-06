import { Image } from "@unpic/react";
import type { FC } from "react";

type Props = {
  view: "NEXT" | "FINISHED";
};

export const QuestListNoData: FC<Props> = ({ view }) => {
  return (
    <div className="w-full h-full px-3 py-4 shadow-lg rounded-b-md rounded-tr-md bg-rhyth-light-blue">
      <div className="flex flex-col justify-center items-center gap-3 bg-white rounded-lg shadow-md py-3">
        {view === "NEXT" ? (
          <>
            <Image src="/icons/analysis.png" layout="constrained" width={80} height={80} alt="analysis icon" />
            <span className="font-bold text-center p-2 text-rhyth-dark-blue">
              新しい習慣がどのくらい身に付いたか
              <br />
              統計レポートで確認しましょう！
            </span>
          </>
        ) : (
          <>
            <Image src="/icons/shuttle.png" layout="constrained" width={80} height={80} alt="shuttle icon" />
            <span className="font-bold text-center p-2 text-rhyth-dark-blue">
              終了したクエストはまだありません。
              <br />
              今日も一日頑張りましょう！
            </span>
          </>
        )}
      </div>
    </div>
  );
};
