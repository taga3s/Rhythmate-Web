import type { FC } from "react";

type Props = {
  title: string;
  data: number;
  color: string;
  isRate: boolean;
};

export const AnalyticsCard: FC<Props> = ({ title, data, color, isRate }) => {
  return (
    <div
      className="text-lg border-[6px] w-full px-2 py-4 bg-white text-rhyth-dark-blue font-bold rounded-lg shadow"
      style={{ borderColor: `${color}` }}
    >
      <span className="block text-center text-sm">{title}</span>
      <span className="block text-center mt-4 text-4xl font-bold font-cp-font">
        {data}
        {isRate && <span>%</span>}
      </span>
    </div>
  );
};
