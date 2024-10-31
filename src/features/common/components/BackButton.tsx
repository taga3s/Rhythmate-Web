import type { FC } from "react";
import { ChevronLeftIcon } from "./icons";
import { Link } from "@tanstack/react-router";

type Props = {
  to: string;
};

export const BackButton: FC<Props> = ({ to }) => {
  return (
    <Link
      to={to}
      className="px-2 py-2 w-fit flex gap-2 items-center bg-white hover:bg-rhyth-hover-light-gray font-bold text-sm rounded-md border-2 border-rhyth-light-gray shadow-sm"
    >
      <div className="w-4 h-4 text-rhyth-gray">
        <ChevronLeftIcon />
      </div>
      <p className="text-rhyth-gray">戻る</p>
    </Link>
  );
};
