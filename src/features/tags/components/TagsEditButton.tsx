import type { FC } from "react";
import { EditIcon } from "../../common/components";

type Props = {
  onClickFn: () => void;
};

export const TagsEditButton: FC<Props> = ({ onClickFn }) => {
  return (
    <button type="button" onClick={onClickFn}>
      <div className="w-6 h-6 text-rhyth-dark-blue">
        <EditIcon />
      </div>
    </button>
  );
};
