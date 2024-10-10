import type { FC } from "react";
import { DeleteIcon } from "../../common/components";

type Props = {
  onClick: () => void;
};

export const TagsDeleteButton: FC<Props> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      <div className="w-5 h-5 text-rhyth-red">
        <DeleteIcon />
      </div>
    </button>
  );
};
