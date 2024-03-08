import { useState } from "react";
import { useForm } from "react-hook-form";
import { NewStar } from "./NewStar";
import { NewDayOfTheWeek } from "./NewDayOfTheWeek";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormErrorMsg } from "../../../common/components/utils/FormErrorMsg";
import { useMutateQuest } from "../../api/hooks/useMutateQuest";
import { useNavigate } from "@tanstack/react-router";
import { TManageValidationSchema, manageValidationSchema } from "../../common/libs/validation";
import { Difficulty } from "../../api/types";
import { DAYS } from "../../common/constant/constant";
import { convertNumberToWeekday } from "../../common/funcs";

type NewValues = {
  title: string;
  startsAt: string;
  minutes: string;
  description: string;
};

export const NewPresenter = () => {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState<Difficulty>("EASY");
  const [days, setDays] = useState<number[]>([1]);
  // const [dateValidation, setDateValidation] = useState(false)
  const { createQuestMutation } = useMutateQuest();

  const handleDays = (date: number) => {
    if (days.some((v) => v === date)) {
      const newDays = days.filter((v) => v !== date);
      setDays(newDays);
    } else {
      setDays([date, ...days]);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TManageValidationSchema>({
    mode: "onBlur",
    resolver: zodResolver(manageValidationSchema),
  });
  const onSubmit = async (data: NewValues) => {
    const modifiedDays = days.sort().map((v) => convertNumberToWeekday(v));
    await createQuestMutation.mutateAsync({
      title: data.title,
      description: data.description,
      startsAt: data.startsAt,
      tagId: "",
      minutes: Number(data.minutes),
      difficulty: difficulty,
      dates: modifiedDays,
    });

    // リセット処理
    reset();
    setDays([]);
    setDifficulty("EASY");
    navigate({ to: "/quests/manage" });
  };

  return (
    <>
      <button onClick={() => navigate({ to: "/quests/manage" })} className="block">
        <div className="px-4 py-3 flex gap-3 items-center bg-gray-200 font-bold text-black text-sm rounded-md">
          一覧へ戻る
        </div>
      </button>
      <h1 className="text-2xl font-bold mt-8">クエスト作成</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6 flex flex-col gap-4">
          <label className="text-base">タイトル</label>
          <input type="text" className="w-full p-2 border-2 rounded-md" {...register("title")} />
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
                <input type="time" className="w-[85px] border-2 rounded p-1 mr-2" {...register("startsAt")} />
                <span>から</span>
              </div>
            </div>
            {errors.startsAt && <FormErrorMsg msg={errors.startsAt.message ?? ""} />}
            <div className="grid grid-cols-5 my-2">
              <p className="col-span-2">取り組み時間</p>
              <div className="col-span-3 flex justify-end">
                <input type="number" className="w-[85px] border-2 rounded p-1 mr-2" min={1} {...register("minutes")} />
                <p>分間</p>
              </div>
            </div>
            {errors.minutes && <FormErrorMsg msg={errors.minutes.message ?? ""} />}
            <div className="my-2">
              <p className="block my-2">実施頻度</p>
              <div className="flex mt-4 gap-1">
                {DAYS.map((v, i) => {
                  return <NewDayOfTheWeek key={i} handleDays={handleDays} day={v} days={days} value={i + 1} />;
                })}
              </div>
              {/* {dateValidation && (<FormErrorMsg msg={"少なくとも1つの曜日を選択します。"} />)} */}
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
            <label htmlFor="" className="my-2 text-base">
              説明
            </label>
          </div>
          <input type="text" className="w-full border-2 p-2 rounded-md" {...register("description")} />
        </div>
        {errors.description && <FormErrorMsg msg={errors.description.message ?? ""} />}
        <button
          type="submit"
          className="w-full mt-14 text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base my-4 p-3 focus:outline-none"
        >
          クエストを作成する
        </button>
      </form>
    </>
  );
};
