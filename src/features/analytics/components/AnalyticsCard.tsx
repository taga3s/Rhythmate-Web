import { FC } from "react";

type Props = {
  title: string;
  data: string;
  color: string;
};

export const Card: FC<Props> = ({ title, data, color }) => {
  return (
    <div
      className={`text-lg border-2 max-w-sm p-2 w-44 h-36 bg-white rounded-lg shadow mx-auto`}
      style={{ borderColor: `${color}` }}
    >
      <h1 className="text-center ">{title}</h1>
      <h1 className="text-center text-5xl mt-4 font-bold">{data}</h1>
    </div>
  );
};
