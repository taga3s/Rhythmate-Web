import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { type FC, useState } from "react";
import { useForm } from "react-hook-form";
import type { Day, Difficulty } from "../../../../api/quest/types";
import { formatDateTimeOnlyTime } from "../../../../utils/dayjs";
import { ConfirmModal, FormErrorMsg } from "../../../common/components";
import { BackButton } from "../../../common/components/BackButton";
import { useQueryQuestList } from "../../hooks/useQueryQuest";
import { useMutateQuest } from "../../hooks/useMutateQuest";
import { DayOfTheWeek } from "../../common/components/DayOfTheWeek";
import { Star } from "../../common/components/Star";
import { DAYS, DIFFICULTIES } from "../../common/consts";
import { convertEnToJPWeekday } from "../../common/funcs";
import { type TManageValidationSchema, manageValidationSchema } from "../../common/validation";
import { EditTagDropdown } from "./EditTagDropdown";

type NewValues = {
  title: string;
  startsAt: string;
  tagId?: string;
  minutes: string;
  days: string[];
  description: string;
};

type Props = {
  quest_id: string;
};

export const EditPresenter: FC<Props> = (props) => {
  const { quest_id } = props;
  const navigate = useNavigate();
  const { deleteQuestMutation, updateQuestMutation } = useMutateQuest();
  const { data: questListData } = useQueryQuestList();

  const targetQuest = questListData.find((v) => v.id === quest_id);

  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(targetQuest?.difficulty ?? "EASY");

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TManageValidationSchema>({
    mode: "onBlur",
    resolver: zodResolver(manageValidationSchema),
    defaultValues: {
      days: targetQuest?.days ?? [],
    },
  });

  const onSubmit = async (data: NewValues) => {
    updateQuestMutation
      .mutateAsync({
        id: quest_id,
        title: data.title,
        description: data.description,
        startsAt: data.startsAt,
        tagId: data.tagId,
        minutes: Number(data.minutes),
        difficulty: selectedDifficulty,
        days: data.days as Day[],
      })
      .then(() => {
        navigate({ to: "/manage" });
      });
  };

  const [openModal, setOpenModal] = useState(false);
  const onClickDelete = async () => {
    await deleteQuestMutation.mutateAsync({
      id: quest_id,
    });
    navigate({ to: "/manage" });
  };

  return (
    <>
      <BackButton onClickNavigation={() => navigate({ to: "/manage" })} />
      <h1 className="text-xl font-cp-font text-rhyth-gray mt-4 mb-2">クエスト編集</h1>
      <form className="bg-white px-3 py-2 rounded-lg shadow-lg" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2 flex flex-col gap-2">
          <label htmlFor="edit-quest-title" className="text-base font-bold text-rhyth-gray">
            タイトル
          </label>
          <input
            type="text"
            className="w-full p-2 border-2 border-rhyth-light-gray rounded-lg"
            id="edit-quest-title"
            defaultValue={targetQuest?.title}
            placeholder="例) 朝のストレッチ"
            {...register("title")}
          />
        </div>
        {errors.title && <FormErrorMsg msg={errors.title.message} />}
        <div className="grid grid-cols-8 mt-4">
          <div className="my-4">
            <svg
              className="w-6 h-6 text-rhyth-gray mt-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="my-2 col-span-7">
            <div className="grid grid-cols-5 my-2 items-center">
              <p className="col-span-2 font-bold text-rhyth-gray">実施時刻</p>
              <div className="col-span-3 flex justify-end items-center">
                <input
                  type="time"
                  className="w-[85px] border-2 rounded p-1 mr-2 bg-white  shadow-sm"
                  defaultValue={targetQuest?.startsAt ? formatDateTimeOnlyTime(targetQuest.startsAt) : "00:00"}
                  {...register("startsAt")}
                />
                <span className="font-bold text-rhyth-gray">から</span>
              </div>
            </div>
            {errors.startsAt && <FormErrorMsg msg={errors.startsAt.message} />}
            <div className="grid grid-cols-5 my-2 items-center">
              <p className="col-span-2 font-bold text-rhyth-gray">取り組み時間</p>
              <div className="col-span-3 flex justify-end items-center">
                <input
                  type="number"
                  min={1}
                  className="w-[85px] border-2 rounded p-1 mr-2 shadow-sm"
                  defaultValue={targetQuest?.minutes}
                  {...register("minutes")}
                />
                <p className="font-bold text-rhyth-gray">分間</p>
              </div>
            </div>
            {errors.minutes && <FormErrorMsg msg={errors.minutes.message} />}
            <div className="my-2">
              <p className="block my-2 font-bold text-rhyth-gray">実施頻度</p>
              <div className="flex mt-4 gap-1">
                {DAYS.map((day) => {
                  return (
                    <DayOfTheWeek
                      key={day}
                      day={convertEnToJPWeekday(day)}
                      value={day}
                      register={register}
                      watch={watch}
                    />
                  );
                })}
              </div>
              {errors.days && <FormErrorMsg msg={errors.days.message} />}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-rhyth-gray"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h11.6c.5 0 1-.2 1.4-.5l4.4-4a2 2 0 0 0 0-3l-4.4-4a2 2 0 0 0-1.4-.5H4Z" />
            </svg>
            <p className="font-bold text-rhyth-gray">難易度</p>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            {DIFFICULTIES.map((difficulty) => {
              return (
                <button
                  type="button"
                  className={`w-1/4 border-2 flex justify-center items-center gap-1 p-2 rounded-md shadow-sm ${
                    selectedDifficulty === difficulty ? "bg-rhyth-blue" : "bg-white hover:bg-rhyth-bg-dark-gray"
                  }`}
                  onClick={() => {
                    setSelectedDifficulty(difficulty);
                  }}
                >
                  {difficulty === "EASY" && <Star />}
                  {difficulty === "NORMAL" && (
                    <>
                      <Star />
                      <Star />
                    </>
                  )}
                  {difficulty === "HARD" && (
                    <>
                      <Star />
                      <Star />
                      <Star />
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-full gap-2 mt-6">
          <div className="flex items-center gap-2 w-24">
            <svg
              className="w-6 h-6 text-rhyth-gray"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>
            <label htmlFor="edit-quest-tag" className="text-base font-bold text-rhyth-gray">
              タグ
            </label>
          </div>
          <EditTagDropdown register={register} watch={watch} tagId={targetQuest?.tagId} />
        </div>
        <div className="w-full gap-2 mt-6">
          <div className="flex items-center gap-2 w-24">
            <svg
              className="w-6 h-6 text-rhyth-gray"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
            </svg>
            <label htmlFor="new-quest-description" className="text-base font-bold text-rhyth-gray">
              メモ
            </label>
          </div>
          <input
            type="text"
            id="edit-quest-description"
            className="w-full border-2 p-2 rounded-md mt-4"
            placeholder="例) 同じメニューを毎日欠かさず行う"
            defaultValue={targetQuest?.description}
            {...register("description")}
          />
        </div>
        {errors.description && <FormErrorMsg msg={errors.description.message} />}
        <div className="flex flex-col mt-8 mb-4 gap-4">
          <button
            type="submit"
            className="w-full text-white bg-rhyth-blue hover:bg-rhyth-hover-blue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base p-3 focus:outline-none shadow-lg"
          >
            クエストを更新する
          </button>
          <button
            onClick={() => setOpenModal(true)}
            type="button"
            className="w-full text-white bg-rhyth-red hover:bg-rhyth-hover-red focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base p-3 focus:outline-none shadow-lg"
          >
            クエストを削除する
          </button>
        </div>
      </form>
      {openModal && (
        <ConfirmModal
          text={"本当に削除しますか?"}
          confirmBtnText={"削除する"}
          cancelBtnText={"キャンセルする"}
          btnColor={"red"}
          actionFn={onClickDelete}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </>
  );
};
