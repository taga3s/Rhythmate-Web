import { FC, useState } from "react";
// import { formatDateTimeOnlyTime } from "../../../pkg/util/dayjs";
import { QuestBoardTimer } from "./QuestBoardTimer";
import useInterval from "../../common/hooks/useInterval";
import { CLOSED, DONE, ENGAGED, FORCE_STOP, NOT_STARTED_YET, OPEN, QuestStatus } from "../constant/constant";
import { useMutateQuest } from "../api/quest/hooks/useMutateQuest";
import { ConfirmModal, ClockIcon } from "../../common/components";
import { calcExp } from "../../common/funcs/calcExp";
import { getBaseTime, getDiffTime } from "../funcs/time";
import { Quest } from "../../../api/quest/model";
import { ManageProgressBar } from "../../manage/components/ManageProgressBar";

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
      <div className="text-center font-bold mt-2 flex items-center justify-center gap-2">
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
      <hr className="h-0.2 bg-rhyth-light-gray mt-2" />
      <div className="flex items-center gap-3 ml-3 h-24">
        <div className=" w-full h-full">
          <div className="mt-2">
            <div className="flex">
              <p className="font-cp-font text-rhyth-green mt-auto ml-1">継続レベル</p>
            </div>
            <ManageProgressBar level={currentQuest.continuationLevel} />
          </div>
          <div className="flex justify-end items-center text-sm">
            <p className="font-cp-font tracking-[0.2em] text-white bg-rhyth-orange px-2 py-1 rounded-full">BONUS</p>
            <span className="ml-1 font-medium text-md text-rhyth-orange tracking-wider">&times;</span>
            <span className="ml-1 font-bold text-lg text-rhyth-orange tracking-wider">
              {currentQuest.continuationLevel}.0
            </span>
          </div>
        </div>
        <div className="bg-rhyth-red h-full flex flex-col justify-center items-center gap-2 font-cp-font text-[12px] tracking-wider">
          <p className="text-white font-semibold">獲得Exp</p>
          <div className="flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-6 h-6 fill-rhyth-orange ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>
            <p className="text-white text-xl font-semibold text-right mr-3">
              {calcExp(currentQuest.difficulty, currentQuest.continuationLevel)}
            </p>
          </div>
        </div>
      </div>
      <hr className="h-0.2 bg-rhyth-light-gray mb-2" />
      <div className="flex items-center gap-1 px-3">
        {questStatus === CLOSED ? (
          <div className="text-rhyth-gray bg-[#D9D9D9] rounded-lg text-lg font-bold p-3 text-center w-full shadow-lg mt-1">
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
