import { FC, useState } from "react";
// import { formatDateTimeOnlyTime } from "../../../pkg/util/dayjs";
import { Quest } from "../../../api/quest/model";
import { ClockIcon, ConfirmModal } from "../../common/components";
import useInterval from "../../common/hooks/useInterval";
import { useMutateQuest } from "../api/quest/hooks/useMutateQuest";
import { CLOSED, DONE, ENGAGED, FORCE_STOP, NOT_STARTED_YET, OPEN, QuestStatus } from "../constant/constant";
import { getBaseTime, getDiffTime } from "../funcs/time";
import { QuestBoardTimer } from "./QuestBoardTimer";

export const getIsStarted = (startedAt: string) => {
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

  const { status } = getBaseTime(
    currentQuest.startsAt,
    getIsStarted(currentQuest.startedAt),
    currentQuest.minutes,
    currentQuest.startedAt,
  );

  const [questStatus, setQuestStatus] = useState<QuestStatus>(status);

  useInterval(() => {
    const { baseTime, status } = getBaseTime(
      currentQuest.startsAt,
      getIsStarted(currentQuest.startedAt),
      currentQuest.minutes,
      currentQuest.startedAt,
    );

    const { diffHH, diffMM, diffSS } = getDiffTime(baseTime);

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

  const onClickStartQuest = async () => {
    await startQuestMutation.mutateAsync({
      id: currentQuest.id,
    });
    setQuestStatus(ENGAGED);
  };

  const onClickFinishQuest = async () => {
    await finishQuestMutation.mutateAsync({
      id: currentQuest.id,
    });
    setQuestStatus(CLOSED);
  };

  const onClickForceFinishQuest = async () => {
    await forceFinishQuestMutation.mutateAsync({
      id: currentQuest.id,
    });
    setQuestStatus(CLOSED);
  };

  return (
    <div className="w-full min-h-[240px] py-3 border-2 border-rhyth-light-gray shadow-lg rounded-lg">
      <div className="flex flex-col gap-1 px-3">
        <h1 className="font-bold text-lg text-rhyth-dark-blue mb-2">{currentQuest.title}</h1>
        <hr className="h-1.5 bg-rhyth-blue" />
        <div className="flex items-center gap-2 text-sm mt-2">
          <div className="font-cp-font text-white bg-rhyth-gray py-1 px-3 rounded-full tracking-wider">
            <p>ひとこと</p>
          </div>
          <h3 className="font-bold text-rhyth-dark-blue">{currentQuest.description}</h3>
        </div>
        <div className="my-2 text-sm">
          <div className="w-[200px] flex justify-center items-center gap-2 text-white bg-rhyth-blue py-1 px-3 rounded-full">
            <ClockIcon color="text-white" />
            <p className="text-sm font-cp-font tracking-widest">クエスト実行タイム</p>
          </div>
        </div>
        {/* {getIsStarted(currentQuest.startedAt) && <span>開始: {formatDateTimeOnlyTime(currentQuest.startedAt)}</span>} */}
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
            className="text-white bg-rhyth-green focus:ring-4 focus:ring-blue-300 rounded-lg text-lg font-bold p-3 mt-1 focus:outline-none w-full shadow-lg"
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
            className="text-white bg-rhyth-blue focus:ring-4 focus:ring-blue-300 rounded-lg text-lg font-bold p-3 mt-1 focus:outline-none w-full shadow-lg"
          >
            クエストを完了する
          </button>
        ) : (
          <button
            onClick={onClickForceFinishQuest}
            className="text-white bg-rhyth-red focus:ring-4 focus:ring-blue-300 rounded-lg text-lg font-bold p-3 mt-1 focus:outline-none w-full shadow-lg"
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
          actionFn={onClickStartQuest}
          closeModal={() => setStartConfirmModalOpen(false)}
        />
      )}
      {finishConfirmModalOpen && (
        <ConfirmModal
          text={"クエストを完了しますか?"}
          confirmBtnText={"完了する"}
          cancelBtnText={"キャンセル"}
          btnColor={"blue"}
          actionFn={onClickFinishQuest}
          closeModal={() => setFinishConfirmModalOpen(false)}
        />
      )}
    </div>
  );
};
