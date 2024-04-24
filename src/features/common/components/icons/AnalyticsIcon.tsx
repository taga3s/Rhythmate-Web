import type { FC } from "react";

type Props = {
  color: string;
};

export const AnalyticsIcon: FC<Props> = ({ color }) => {
  return (
    <svg
      className={`w-6 h-6 ${color} hover:text-rhyth-orange`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 4.5V19c0 .6.4 1 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.2M20 9v3.2"
      />
    </svg>
  );
};
