import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { type FC, useState } from "react";
import { useForm } from "react-hook-form";
import type { Day, Difficulty } from "../../../../api/quest/types";
import { formatDateTimeOnlyTime } from "../../../common/utils";
import { ClockIcon, ConfirmModal, FormErrorMsg, PencilIcon, StarIcon, TagIcon } from "../../../common/components";
import { BackButton } from "../../../common/components/BackButton";
import { useQueryQuestList } from "../../hooks/useQueryQuest";
import { useMutateQuest } from "../../hooks/useMutateQuest";
import { DayOfTheWeek } from "../../common/components/DayOfTheWeek";
import { DAYS, DIFFICULTIES } from "../../common/consts";
import { convertEnToJPWeekday } from "../../common/utils";
import { type TManageValidationSchema, manageValidationSchema } from "../../common/validation";
import { TagDropdown } from "../../common/components/TagDropdown";
import { DifficultyOption } from "../../common/components/DifficultyOption";

type NewValues = {
  title: string;
  startsAt: string;
  tagId: string;
  minutes: number;
  days: Day[];
  difficulty: Difficulty;
  description: string;
};

type Props = {
  quest_id: string;
};

export const EditPresenter: FC<Props> = (props) => {
  const { quest_id } = props;
  const { deleteQuestMutation, updateQuestMutation } = useMutateQuest();
  const { data: questListData } = useQueryQuestList();

  const targetQuest = questListData.find((v) => v.id === quest_id);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TManageValidationSchema>({
    mode: "onBlur",
    resolver: zodResolver(manageValidationSchema),
    defaultValues: {
      title: targetQuest?.title ?? "",
      startsAt: targetQuest?.startsAt ? formatDateTimeOnlyTime(targetQuest.startsAt) : "00:00",
      tagId: targetQuest?.tagId ?? "",
      minutes: targetQuest?.minutes ?? 1,
      days: targetQuest?.days ?? [],
      difficulty: targetQuest?.difficulty ?? "EASY",
      description: targetQuest?.description ?? "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data: NewValues) => {
    updateQuestMutation
      .mutateAsync({
        id: quest_id,
        title: data.title,
        description: data.description,
        starts_at: data.startsAt,
        tag_id: data.tagId,
        minutes: data.minutes,
        days: data.days,
        difficulty: data.difficulty,
      })
      .then(() => {
        navigate({ to: "/manage" });
      });
  };

  const [openModal, setOpenModal] = useState(false);

  const onClickDelete = () => {
    deleteQuestMutation
      .mutateAsync({
        id: quest_id,
      })
      .then(() => {
        navigate({ to: "/manage" });
      });
  };

  return (
    <>
      <BackButton onClick={() => navigate({ to: "/manage" })} />
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
            placeholder="例) 朝のストレッチ"
            {...register("title")}
          />
        </div>
        {errors.title && <FormErrorMsg msg={errors.title.message} />}
        <div className="grid grid-cols-8 mt-4">
          <div className="my-4">
            <div className="w-6 h-6 text-rhyth-gray mt-2">
              <ClockIcon />
            </div>
          </div>
          <div className="my-2 col-span-7">
            <div className="grid grid-cols-5 my-2 items-center">
              <p className="col-span-2 font-bold text-rhyth-gray">実施時刻</p>
              <div className="col-span-3 flex justify-end items-center">
                <input
                  type="time"
                  className="w-[85px] border-2 rounded p-1 mr-2 bg-white  shadow-sm"
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
                      displayedDay={convertEnToJPWeekday(day)}
                      selectedDays={watch("days")}
                      day={day}
                      register={register}
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
            <div className="w-6 h-6 text-rhyth-gray">
              <StarIcon />
            </div>
            <p className="font-bold text-rhyth-gray">難易度</p>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            {DIFFICULTIES.map((difficulty) => (
              <DifficultyOption
                key={difficulty}
                difficulty={difficulty}
                selectedDifficulty={watch("difficulty")}
                register={register}
              />
            ))}
          </div>
          {errors.difficulty && <FormErrorMsg msg={errors.difficulty.message} />}
        </div>
        <div className="w-full gap-2 mt-6">
          <div className="flex items-center gap-2 w-24">
            <div className="w-6 h-6 text-rhyth-gray">
              <TagIcon />
            </div>
            <label htmlFor="edit-quest-tag" className="text-base font-bold text-rhyth-gray">
              タグ
            </label>
          </div>
          <TagDropdown selectedTagId={watch("tagId")} register={register} />
        </div>
        <div className="w-full gap-2 mt-6">
          <div className="flex items-center gap-2 w-24">
            <div className="w-6 h-6 text-rhyth-gray">
              <PencilIcon />
            </div>
            <label htmlFor="new-quest-description" className="text-base font-bold text-rhyth-gray">
              メモ
            </label>
          </div>
          <input
            type="text"
            id="edit-quest-description"
            className="w-full border-2 p-2 rounded-md mt-4"
            placeholder="例) 同じメニューを毎日欠かさず行う"
            {...register("description")}
          />
        </div>
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
          onAction={onClickDelete}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </>
  );
};
