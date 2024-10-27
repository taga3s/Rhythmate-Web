import type { FC } from "react";

type Props = {
  view: "NEXT" | "FINISHED";
};

export const QuestListNoData: FC<Props> = ({ view }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full h-full p-3 bg-white rounded-lg shadow-md">
      {view === "NEXT" ? (
        <>
          <picture className="w-20 h-20">
            <source srcSet="/icons/analysis.webp" type="image/webp" />
            <source srcSet="/icons/analysis.png" type="image/png" />
            <img alt="analysis icon" />
          </picture>
          <span className="font-bold text-center p-2 text-rhyth-dark-blue">
            新しい習慣がどのくらい身に付いたか
            <br />
            統計レポートで確認しましょう！
          </span>
        </>
      ) : (
        <>
          <picture className="w-20 h-20">
            <source srcSet="/icons/shuttle.webp" type="image/webp" />
            <source srcSet="/icons/shuttle.png" type="image/png" />
            <img alt="shuttle icon" />
          </picture>
          <span className="font-bold text-center p-2 text-rhyth-dark-blue">
            終了したクエストはまだありません。
            <br />
            今日も一日頑張りましょう！
          </span>
        </>
      )}
    </div>
  );
};
