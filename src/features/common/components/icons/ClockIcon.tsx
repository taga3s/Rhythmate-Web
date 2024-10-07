import type { FC } from "react";

type Props = {
  color: string;
};

export const ClockIcon: FC<Props> = ({ color }) => {
  return (
    <svg
      className={`w-full h-full ${color}`}
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
  );
};
