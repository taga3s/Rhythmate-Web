import { type FC, useState, type Dispatch, type SetStateAction } from "react";
import type { Quest } from "../../../api/quest/model";
import { ConfirmModal } from "../../common/components";
import useInterval from "../../common/hooks/useInterval";
import { useMutateQuest } from "../api/quest/useMutateQuest";
import { CLOSED, DONE, ENGAGED, FORCE_STOP, NOT_STARTED_YET, OPEN, type QuestStatus } from "../constant/constant";
import { calcBaseTime, calcDiffTimeBetweenNowAndTargetTime } from "../funcs/time";
import { QuestBoardTimer } from "./QuestBoardTimer";

export const getIsStarted = (startedAt: string): boolean => {
  return startedAt !== NOT_STARTED_YET;
};

type Props = {
  currentQuest: Quest;
  setLaunchConfetti: Dispatch<SetStateAction<boolean>>;
};

export const QuestBoard: FC<Props> = (props) => {
  const { currentQuest, setLaunchConfetti } = props;

  const [startConfirmModalOpen, setStartConfirmModalOpen] = useState(false);
  const [finishConfirmModalOpen, setFinishConfirmModalOpen] = useState(false);
  const { startQuestMutation, finishQuestMutation, forceFinishQuestMutation } = useMutateQuest();

  const { status } = calcBaseTime(
    currentQuest.startsAt,
    getIsStarted(currentQuest.startedAt),
    currentQuest.minutes,
    currentQuest.startedAt,
  );
  const [questStatus, setQuestStatus] = useState<QuestStatus>(status);

  useInterval(() => {
    const { baseTime, status } = calcBaseTime(
      currentQuest.startsAt,
      getIsStarted(currentQuest.startedAt),
      currentQuest.minutes,
      currentQuest.startedAt,
    );

    const { diffHH, diffMM, diffSS } = calcDiffTimeBetweenNowAndTargetTime(baseTime);

    // クエスト強制終了へ切り替える
    if (status === FORCE_STOP) {
      setQuestStatus(FORCE_STOP);
    }
    // クエスト解放へ切り替える
    if (diffHH === 0 && diffMM === 0 && diffSS === 0 && questStatus === CLOSED) {
      setQuestStatus(OPEN);
    }
    // クエスト終了へ切り替える
    if (diffHH === 0 && diffMM === 0 && diffSS === 0 && questStatus === ENGAGED) {
      setQuestStatus(DONE);
    }
  }, 1000);

  const handleStartQuest = async () => {
    await startQuestMutation.mutateAsync({
      id: currentQuest.id,
    });
    setQuestStatus(ENGAGED);
  };

  const handleFinishQuest = async () => {
    await finishQuestMutation.mutateAsync({
      id: currentQuest.id,
    });
    setQuestStatus(CLOSED);

    setLaunchConfetti(true);
    setTimeout(() => {
      setLaunchConfetti(false);
    }, 1000 * 5);
  };

  const handleForceFinishQuest = async () => {
    await forceFinishQuestMutation.mutateAsync({
      id: currentQuest.id,
    });
    setQuestStatus(CLOSED);
  };

  return (
    <div className="w-full min-h-[240px] py-3 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col gap-1 px-4">
        <h1 className="py-2 font-cp-font font-bold text-2xl tracking-wider text-rhyth-dark-blue">
          {currentQuest.title}
        </h1>
        <hr className="h-1.5" />
        <div className="flex items-center gap-2 text-sm mt-2">
          <h3 className="text-md text-rhyth-dark-blue">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-rhyth-dark-blue"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
                />
              </svg>
              {currentQuest.description !== "" ? currentQuest.description : "メモがありません"}
            </div>
          </h3>
        </div>
      </div>
      <div className="text-center font-bold my-2 flex items-center justify-center gap-2">
        <span className="text-md text-rhyth-dark-blue">
          {questStatus === CLOSED
            ? "クエスト解放まで"
            : questStatus === OPEN
              ? "クエスト解放中"
              : questStatus === ENGAGED
                ? "残り時間"
                : "クエスト終了"}
        </span>
        <QuestBoardTimer
          startsAt={currentQuest.startsAt}
          isStarted={getIsStarted(currentQuest.startedAt)}
          minutes={currentQuest.minutes}
          startedAt={currentQuest.startedAt}
        />
      </div>
      <hr className="h-0.2 bg-rhyth-light-gray mb-2" />
      <div className="flex items-center gap-1 px-3 mt-2">
        {questStatus === CLOSED ? (
          <div className="text-rhyth-gray bg-rhyth-light-gray rounded-lg text-lg font-bold p-3 text-center w-full shadow-lg mt-1">
            クエスト未開放
          </div>
        ) : questStatus === OPEN ? (
          <button
            type="button"
            onClick={() => setStartConfirmModalOpen(true)}
            className="text-white bg-rhyth-green hover:bg-rhyth-hover-green focus:ring-4 focus:ring-blue-300 rounded-lg text-lg font-bold p-3 mt-1 focus:outline-none w-full shadow-lg"
          >
            クエストを開始する
          </button>
        ) : questStatus === ENGAGED ? (
          <div className="text-white bg-rhyth-orange rounded-lg text-lg font-bold p-3 text-center mt-1 w-full shadow-lg">
            クエストに集中しましょう
          </div>
        ) : questStatus === DONE ? (
          <button
            type="button"
            onClick={() => setFinishConfirmModalOpen(true)}
            className="text-white bg-rhyth-blue hover:bg-rhyth-hover-blue focus:ring-4 focus:ring-blue-300 rounded-lg text-lg font-bold p-3 mt-1 focus:outline-none w-full shadow-lg"
          >
            クエストを完了する
          </button>
        ) : (
          <button
            type="button"
            onClick={handleForceFinishQuest}
            className="text-white bg-rhyth-red hover:bg-rhyth-hover-red focus:ring-4 focus:ring-blue-300 rounded-lg text-lg font-bold p-3 mt-1 focus:outline-none w-full shadow-lg"
          >
            クエストを強制終了する
          </button>
        )}
      </div>
      {startConfirmModalOpen && (
        <ConfirmModal
          text={"クエストを開始しますか?"}
          confirmBtnText={"開始する"}
          cancelBtnText={"キャンセル"}
          btnColor={"green"}
          actionFn={handleStartQuest}
          closeModal={() => setStartConfirmModalOpen(false)}
        />
      )}
      {finishConfirmModalOpen && (
        <ConfirmModal
          text={"クエストを完了しますか?"}
          confirmBtnText={"完了する"}
          cancelBtnText={"キャンセル"}
          btnColor={"blue"}
          actionFn={handleFinishQuest}
          closeModal={() => setFinishConfirmModalOpen(false)}
        />
      )}
    </div>
  );
};
