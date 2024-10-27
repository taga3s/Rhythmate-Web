import { type FC, useState } from "react";
import type { Quest } from "../../../api/quest/model";
import { ConfirmModal } from "../../common/components";
import { useTimeout } from "../../common/hooks/useTimeout";
import { useMutateQuest } from "../hooks/useMutateQuest";
import { CLOSED, DONE, ENGAGED, FORCE_STOP, OPEN, type QuestStatus } from "../consts";
import { calcBaseTime, calcDiffTimeBetweenNowAndTargetTime } from "../time";

const constructTime = (hh: number, mm: number, ss: number): string =>
  `${hh}時間${`${mm}`.padStart(2, "0")}分${`${ss}`.padStart(2, "0")}秒`;

type Props = {
  currentQuest: Quest;
  handleLaunchConfetti: () => void;
};

export const QuestBoard: FC<Props> = (props) => {
  const { currentQuest, handleLaunchConfetti } = props;
  const { startQuestMutation, finishQuestMutation, forceFinishQuestMutation } = useMutateQuest();

  const [isStartConfirmModalOpen, setIsStartConfirmModalOpen] = useState(false);
  const [isFinishConfirmModalOpen, setIsFinishConfirmModalOpen] = useState(false);

  const { baseTime, status } = calcBaseTime({
    startsAt: currentQuest.startsAt,
    minutes: currentQuest.minutes,
    startedAt: currentQuest.startedAt,
  });

  const [questStatus, setQuestStatus] = useState<QuestStatus>(status);
  const { diffHH, diffMM, diffSS } = calcDiffTimeBetweenNowAndTargetTime(baseTime);
  const [time, setTime] = useState(constructTime(diffHH, diffMM, diffSS));

  useTimeout(() => {
    const { baseTime, status } = calcBaseTime({
      startsAt: currentQuest.startsAt,
      minutes: currentQuest.minutes,
      startedAt: currentQuest.startedAt,
    });

    const { diffHH, diffMM, diffSS } = calcDiffTimeBetweenNowAndTargetTime(baseTime);

    // クエスト強制終了へ切り替える
    if (status === FORCE_STOP) {
      setQuestStatus(FORCE_STOP);
      setTime(constructTime(0, 0, 0));
    } else {
      // クエスト解放へ切り替える
      if (diffHH === 0 && diffMM === 0 && diffSS === 0 && questStatus === CLOSED) {
        setQuestStatus(OPEN);
      }
      // クエスト終了へ切り替える
      if (diffHH === 0 && diffMM === 0 && diffSS === 0 && questStatus === ENGAGED) {
        setQuestStatus(DONE);
      }
      setTime(constructTime(diffHH, diffMM, diffSS));
    }
  }, 1000);

  const onStartQuest = async () => {
    await startQuestMutation.mutateAsync({
      id: currentQuest.id,
    });
  };

  const onFinishQuest = async () => {
    await finishQuestMutation.mutateAsync({
      id: currentQuest.id,
    });
  };

  const onForceFinishQuest = async () => {
    await forceFinishQuestMutation.mutateAsync({
      id: currentQuest.id,
    });
  };

  return (
    <div className="w-full min-h-[240px] py-3 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col gap-1 px-4">
        <h1 className="py-2 font-cp-font font-bold text-2xl tracking-wider text-rhyth-dark-blue">
          {currentQuest.title}
        </h1>
        <hr className="h-1.5" />
        <div className="flex items-center gap-2 text-sm mt-2 text-rhyth-dark-blue">
          <span>{currentQuest.description !== "" ? currentQuest.description : "メモがありません"}</span>
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
        <span className="text-2xl text-rhyth-light-blue tracking-wider">{time}</span>
      </div>
      <div className="flex items-center gap-1 px-3 mt-4">
        {questStatus === CLOSED ? (
          <div className="text-rhyth-gray bg-rhyth-light-gray rounded-lg text-lg font-bold p-3 text-center w-full shadow-lg mt-1">
            クエスト未開放
          </div>
        ) : questStatus === OPEN ? (
          <button
            type="button"
            onClick={() => setIsStartConfirmModalOpen(true)}
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
            onClick={() => setIsFinishConfirmModalOpen(true)}
            className="text-white bg-rhyth-blue hover:bg-rhyth-hover-blue focus:ring-4 focus:ring-blue-300 rounded-lg text-lg font-bold p-3 mt-1 focus:outline-none w-full shadow-lg"
          >
            クエストを完了する
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              onForceFinishQuest();
              setQuestStatus(CLOSED);
            }}
            className="text-white bg-rhyth-red hover:bg-rhyth-hover-red focus:ring-4 focus:ring-blue-300 rounded-lg text-lg font-bold p-3 mt-1 focus:outline-none w-full shadow-lg"
          >
            クエストを強制終了する
          </button>
        )}
      </div>
      {isStartConfirmModalOpen && (
        <ConfirmModal
          text={"クエストを開始しますか?"}
          confirmBtnText={"開始する"}
          cancelBtnText={"キャンセル"}
          btnColor={"green"}
          onAction={() => {
            onStartQuest();
            setQuestStatus(ENGAGED);
          }}
          closeModal={() => setIsStartConfirmModalOpen(false)}
        />
      )}
      {isFinishConfirmModalOpen && (
        <ConfirmModal
          text={"クエストを完了しますか?"}
          confirmBtnText={"完了する"}
          cancelBtnText={"キャンセル"}
          btnColor={"blue"}
          onAction={() => {
            onFinishQuest();
            setQuestStatus(CLOSED);
            handleLaunchConfetti();
          }}
          closeModal={() => setIsFinishConfirmModalOpen(false)}
        />
      )}
    </div>
  );
};
