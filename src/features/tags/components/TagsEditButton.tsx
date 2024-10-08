import type { FC } from "react";
import { EditIcon } from "../../common/components";

type Props = {
  onClick: () => void;
};

export const TagsEditButton: FC<Props> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      <div className="w-6 h-6 text-rhyth-dark-blue">
        <EditIcon />
      </div>
    </button>
  );
};
