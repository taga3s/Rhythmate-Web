import { FC } from "react";

type Props = {
  title: string;
  data: string;
  color: string;
  colornumber: string;
};

export const Card: FC<Props> = ({ title, data, color, colornumber }) => {
  return (
    <div
      className={`border-${color}-${colornumber} text-lg border-2 max-w-sm mt-4 p-2 w-44 h-36 bg-white border border-gray-200 rounded-lg shadow mx-auto`}
    >
      <h1 className="text-center ">{title}</h1>
      <h1 className="text-center text-5xl mt-4 font-bold">{data}</h1>
    </div>
  );
};

// propsにカラー
