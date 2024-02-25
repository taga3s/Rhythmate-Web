import { FC } from "react";

type Props = {
  title: string;
  data: number;
  color: string;
  isRate: boolean;
};

export const AnalyticsCard: FC<Props> = ({ title, data, color, isRate }) => {
  return (
    <div
      className={`text-lg border-2 max-w-sm w-full px-2 py-4 bg-white rounded-lg shadow`}
      style={{ borderColor: `${color}` }}
    >
      <h1 className="text-center text-base">{title}</h1>
      <h1 className="text-center mt-4 text-5xl font-bold">
        {data}
        {isRate && <span>%</span>}
      </h1>
    </div>
  );
};
