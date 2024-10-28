import type { FC } from "react";
import { toRhythTextColor } from "../../common/utils";

type Props = {
  title: string;
  data: string;
  color: string;
};

export const AnalyticsCard: FC<Props> = ({ title, data, color }) => {
  return (
    <div className="flex items-center justify-between border-2 px-10 py-3 bg-white hover:bg-gray-50 text-rhyth-dark-blue rounded-lg shadow">
      <span className={`block text-sm font-bold ${toRhythTextColor(color)}`}>{title}</span>
      <span className="block text-4xl font-bold font-cp-font">{data}</span>
    </div>
  );
};
