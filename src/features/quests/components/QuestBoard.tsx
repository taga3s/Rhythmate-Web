import { type FC, useState } from "react";
import type { Quest } from "../../../api/quest/model";
import { ClockIcon, ConfirmModal } from "../../common/components";
import useInterval from "../../common/hooks/useInterval";
import { useMutateQuest } from "../api/quest/hooks/useMutateQuest";
import { CLOSED, DONE, ENGAGED, FORCE_STOP, NOT_STARTED_YET, OPEN, type QuestStatus } from "../constant/constant";
import { calcBaseTime, calcDiffTimeBetweenNowAndTargetTime } from "../funcs/time";
import { QuestBoardTimer } from "./QuestBoardTimer";

export const getIsStarted = (startedAt: string): boolean => {
  return startedAt !== NOT_STARTED_YET;
};

type Props = {
  currentQuest: Quest;
};

export const QuestBoard: FC<Props> = (props) => {
  const { currentQuest } = props;

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

    if (status === FORCE_STOP && questStatus !== FORCE_STOP) {
      setQuestStatus(FORCE_STOP);
    }
    // クエスト解放へ切り替える
    if (diffHH === diffMM && diffMM === diffSS && questStatus === CLOSED) {
      setQuestStatus(OPEN);
    }
    // クエスト集中へ切り替える
    if (diffHH === diffMM && diffMM === diffSS && questStatus === OPEN) {
      setQuestStatus(ENGAGED);
    }
    // クエスト終了へ切り替える
    if (diffHH === diffMM && diffMM === diffSS && questStatus === ENGAGED) {
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
  };

  const handleForceFinishQuest = async () => {
    await forceFinishQuestMutation.mutateAsync({
      id: currentQuest.id,
    });
    setQuestStatus(CLOSED);
  };

  return (
    <div className="w-full min-h-[240px] py-3 border-2 border-rhyth-light-gray bg-white shadow-lg rounded-lg">
      <div className="flex flex-col gap-1 px-4">
        <h1 className="py-2 font-bold text-lg text-rhyth-dark-blue">{currentQuest.title}</h1>
        <hr className="h-1.5 bg-rhyth-blue" />
        <div className="flex items-center gap-2 text-sm mt-2">
          <div className="font-bold text-white bg-rhyth-gray py-1 px-3 rounded-lg tracking-wider">
            <span>メモ</span>
          </div>
          <h3 className="font-bold text-rhyth-dark-blue">{currentQuest.description}</h3>
        </div>
        <div className="w-fit my-2 py-1 px-3 flex justify-center items-center gap-2 text-white bg-rhyth-blue rounded-lg">
          <ClockIcon color="text-white" />
          <span className="text-sm font-bold tracking-widest">実行タイム</span>
        </div>
      </div>
      <div className="text-center font-bold my-2 flex items-center justify-center gap-2">
        <span className="text-md text-rhyth-dark-blue">
          {questStatus === CLOSED ? (
            <span>クエスト解放まで</span>
          ) : questStatus === OPEN ? (
            <span>クエスト解放中</span>
          ) : questStatus === ENGAGED ? (
            <span>残り時間</span>
          ) : (
            <span>クエスト終了</span>
          )}
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
            onClick={() => setFinishConfirmModalOpen(true)}
            className="text-white bg-rhyth-blue hover:bg-rhyth-hover-blue focus:ring-4 focus:ring-blue-300 rounded-lg text-lg font-bold p-3 mt-1 focus:outline-none w-full shadow-lg"
          >
            クエストを完了する
          </button>
        ) : (
          <button
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
