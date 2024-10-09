import type { FC } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../../common/components/icons";

type Props = {
  direction: "left" | "right";
  isEdgy: boolean;
  onClick: () => void;
};

export const AnalyticsSwitchButton: FC<Props> = ({ onClick, direction, isEdgy }) => {
  return (
    <button type="button" onClick={onClick} disabled={isEdgy}>
      {direction === "left" ? (
        <div
          className={`w-6 h-6 text-rhyth-gray ${
            isEdgy ? "w-6 h-6 text-transparent" : "w-6 h-6 text-rhyth-gray hover:text-rhyth-black"
          } `}
        >
          <ChevronLeftIcon />
        </div>
      ) : (
        <div
          className={`w-6 h-6 text-rhyth-gray ${
            isEdgy ? "w-6 h-6 text-transparent" : "w-6 h-6 text-rhyth-gray hover:text-rhyth-black"
          } `}
        >
          <ChevronRightIcon />
        </div>
      )}
    </button>
  );
};
