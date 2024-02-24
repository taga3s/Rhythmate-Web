import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NewStar } from "./NewStar";
import { NewDayOfTheWeek } from "./NewDayOfTheWeek";

type Difficulty = "EASY" | "NORMAL" | "DIFFICULT";
type Week = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

type CreateQuest = {
  title: string;
  description: string;
  starts_at: string;
  minutes: number;
  tag_id: string;
  difficulty: Difficulty;
  dates: Week[];
};

export const NewPresenter = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>("EASY");

  const { register, handleSubmit, setValue } = useForm<CreateQuest>();
  const onSubmit: SubmitHandler<CreateQuest> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" className="w-full h-10 pb-2 border-b-4 mb-2" {...register("title")} />
        <div className="grid grid-cols-6">
          <div className="my-4">
            <svg
              className="w-6 h-6 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="my-2 col-span-5">
            <div className="grid grid-cols-5 my-2">
              <p className="col-span-2">実施時刻</p>
              <div className="col-span-3 flex justify-end">
                <input type="time" {...register("starts_at")} />
                <p>から</p>
              </div>
            </div>
            <div className="grid grid-cols-5 my-2">
              <p className="col-span-2">取り組み時間</p>
              <div className="col-span-3 flex justify-end">
                <input type="text" className="w-10 border-2 rounded" {...register("minutes")} />
                <p>分間</p>
              </div>
            </div>
            <div className="my-2">
              <p className="block my-2">実施頻度</p>
              <div className="flex my-4">
                <NewDayOfTheWeek date="MON" setValue={setValue} />
                <NewDayOfTheWeek date="TUE" />
                <NewDayOfTheWeek date="WED" />
                <NewDayOfTheWeek date="THU" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 my-2">
          <div>
            <svg
              className="w-6 h-6 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 3h-5.7a2 2 0 0 0-1.4.6L3.6 11a2 2 0 0 0 0 2.8l6.6 6.6a2 2 0 0 0 2.8 0l7.4-7.5a2 2 0 0 0 .6-1.4V6a3 3 0 0 0-3-3Zm-2.4 6.4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>
          </div>
          <div className="col-span-5 flex justify-between">
            <p>タグ</p>
            <input type="text" className="border-2 rounded" {...register("tag_id")} />
          </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="my-4">
            <svg
              className="w-6 h-6 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h11.6c.5 0 1-.2 1.4-.5l4.4-4a2 2 0 0 0 0-3l-4.4-4a2 2 0 0 0-1.4-.5H4Z" />
            </svg>
          </div>
          <div className="col-span-5 my-4">
            <p className="block">難易度</p>
            <div className="grid grid-cols-3 gap-6 my-2">
              <button
                className="border-2 flex justify-center items-center gap-1 p-2 rounded"
                onClick={() => {
                  setDifficulty("EASY");
                }}
                {...register("difficulty")}
              >
                <NewStar />
              </button>
              <button
                className="border-2 flex justify-center items-center gap-1 p-2 rounded"
                onClick={() => {
                  setDifficulty("NORMAL");
                }}
              >
                <NewStar />
                <NewStar />
              </button>
              <button
                className="border-2 flex justify-center items-center gap-1 p-2 rounded"
                onClick={() => {
                  setDifficulty("DIFFICULT");
                }}
              >
                <NewStar />
                <NewStar />
                <NewStar />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="my-2">
            <svg
              className="w-6 h-6 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
            </svg>
          </div>
          <div className="col-span-5 my-2">
            <label htmlFor="" className="my-2">
              ひとこと
            </label>
            <input type="text" className="border-2 rounded my-2" {...register("description")} />
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm my-4 px-5 py-2.5 focus:outline-none"
        >
          クエストを作成する
        </button>
      </form>
    </>
  );
};
