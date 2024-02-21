import { FC } from "react";

type Props = {
  title: string;
  data: string;
  color: string;
};

export const AnalyticsCard: FC<Props> = ({ title, data, color }) => {
  return (
    <div
      className={`text-lg border-2 max-w-sm w-full px-2 py-4 bg-white rounded-lg shadow`}
      style={{ borderColor: `${color}` }}
    >
      <h1 className="text-center text-base">{title}</h1>
      <h1 className="text-center text-5xl mt-4 font-bold">{data}</h1>
    </div>
  );
};
