import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormErrorMsg } from "../../../common/components/utils/FormErrorMsg";
import { useMutateQuest } from "../../api/quest/hooks/useMutateQuest";
import { useNavigate } from "@tanstack/react-router";
import { useQueryQuestList } from "../../../quests/api/quest/hooks/useQueryQuest";
import { NewStar } from "../../new/components/NewStar";
import { NewDayOfTheWeek } from "../../new/components/NewDayOfTheWeek";
import { TManageValidationSchema, manageValidationSchema } from "../../common/libs/validation";
import { formatDateToTime } from "../../../../pkg/util/dayjs";
import { ConfirmModal } from "../../../common/components/ConfirmModal";
import { DAYS } from "../../common/constant/constant";
import { convertEnToJPWeekday } from "../../common/funcs";
import { Day, Difficulty } from "../../../../api/quest/types";

type NewValues = {
  title: string;
  startsAt: string;
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
  const { data, isLoading } = useQueryQuestList();

  const targetQuest = data?.find((v) => v.id === quest_id);

  const [difficulty, setDifficulty] = useState<Difficulty>("EASY");

  useEffect(() => {
    const modifiedDays = targetQuest?.days ?? [];
    setValue("days", modifiedDays);
    setDifficulty(targetQuest?.difficulty ?? "EASY");
  }, [isLoading]);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TManageValidationSchema>({
    mode: "onBlur",
    resolver: zodResolver(manageValidationSchema),
  });
  const onSubmit = async (data: NewValues) => {
    await updateQuestMutation.mutateAsync({
      id: quest_id,
      title: data.title,
      description: data.description,
      startsAt: data.startsAt,
      tagId: "",
      minutes: Number(data.minutes),
      difficulty: difficulty,
      days: data.days as Day[],
    });
    navigate({ to: "/quests/manage" });
  };

  const [openModal, setOpenModal] = useState(false);
  const onClickDelete = async () => {
    await deleteQuestMutation.mutateAsync({
      id: quest_id,
    });
    navigate({ to: "/quests/manage" });
  };
  return (
    <>
      <div>
        <button onClick={() => navigate({ to: "/quests/manage" })} className="block">
          <div className="px-4 py-3 flex gap-3 items-center bg-gray-200 font-bold text-black text-sm rounded-md">
            一覧へ戻る
          </div>
        </button>
      </div>
      <h1 className="text-2xl font-bold mt-8">クエスト編集</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-6 flex flex-col gap-4">
            <label htmlFor="edit-quest-title" className="text-base">
              タイトル
            </label>
            <input
              type="text"
              className="w-full p-2 border-2 rounded-md"
              id="edit-quest-title"
              defaultValue={targetQuest?.title}
              {...register("title")}
            />
          </div>
          {errors.title && <FormErrorMsg msg={errors.title.message ?? ""} />}
          <div className="grid grid-cols-6 mt-4">
            <div className="my-4">
              <svg
                className="w-6 h-6 text-gray-600"
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
            <div className="my-2 col-span-5">
              <div className="grid grid-cols-5 my-2">
                <p className="col-span-2">実施時刻</p>
                <div className="col-span-3 flex justify-end">
                  <input
                    type="time"
                    className="w-[85px] border-2 rounded p-1 mr-2"
                    defaultValue={formatDateToTime(targetQuest?.startsAt ?? "")}
                    {...register("startsAt")}
                  />
                  <span>から</span>
                </div>
              </div>
              {errors.startsAt && <FormErrorMsg msg={errors.startsAt.message ?? ""} />}
              <div className="grid grid-cols-5 my-2">
                <p className="col-span-2">取り組み時間</p>
                <div className="col-span-3 flex justify-end">
                  <input
                    type="number"
                    min={1}
                    className="w-[85px] border-2 rounded p-1 mr-2"
                    defaultValue={targetQuest?.minutes}
                    {...register("minutes")}
                  />
                  <p>分間</p>
                </div>
              </div>
              {errors.minutes && <FormErrorMsg msg={errors.minutes.message ?? ""} />}
              <div className="my-2">
                <p className="block my-2">実施頻度</p>
                <div className="flex mt-4 gap-1">
                  {DAYS.map((day, i) => {
                    return (
                      <NewDayOfTheWeek
                        key={i}
                        day={convertEnToJPWeekday(day)}
                        value={day}
                        register={register}
                        watch={watch}
                      />
                    );
                  })}
                </div>
                {errors.days && <FormErrorMsg msg={errors.days.message ?? ""} />}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h11.6c.5 0 1-.2 1.4-.5l4.4-4a2 2 0 0 0 0-3l-4.4-4a2 2 0 0 0-1.4-.5H4Z" />
              </svg>
              <p>難易度</p>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <button
                type="button"
                className={`border-2 flex justify-center items-center gap-1 p-2 rounded ${
                  difficulty === "EASY" ? "bg-blue-400" : "bg-white"
                }`}
                onClick={() => {
                  setDifficulty("EASY");
                }}
              >
                <NewStar />
              </button>
              <button
                type="button"
                className={`border-2 flex justify-center items-center gap-1 p-2 rounded ${
                  difficulty === "NORMAL" ? "bg-blue-400" : "bg-white"
                }`}
                onClick={() => {
                  setDifficulty("NORMAL");
                }}
              >
                <NewStar />
                <NewStar />
              </button>
              <button
                type="button"
                className={`border-2 flex justify-center items-center gap-1 p-2 rounded ${
                  difficulty === "HARD" ? "bg-blue-400" : "bg-white"
                }`}
                onClick={() => {
                  setDifficulty("HARD");
                }}
              >
                <NewStar />
                <NewStar />
                <NewStar />
              </button>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-2 mt-6">
            <div className="flex items-center gap-2 w-24">
              <svg
                className="w-6 h-6 text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
              </svg>
              <label htmlFor="edit-quest-description" className="my-2 text-base">
                説明
              </label>
            </div>
            <input
              type="text"
              className="w-full border-2 p-2 rounded-md"
              id="edit-quest-description"
              defaultValue={targetQuest?.description}
              {...register("description")}
            />
          </div>
          {errors.description && <FormErrorMsg msg={errors.description.message ?? ""} />}
          <div className="flex flex-col mt-14 gap-6">
            <button
              type="submit"
              className="w-full text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base p-3 focus:outline-none"
            >
              クエストを更新する
            </button>
            <button
              onClick={() => setOpenModal(true)}
              type="button"
              className="w-full text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base p-3 focus:outline-none"
            >
              クエストを削除する
            </button>
          </div>
        </form>
      )}
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
