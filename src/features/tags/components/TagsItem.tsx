import type { FC } from "react";
import { DeleteIcon, EditIcon, TagIcon } from "../../common/components";
import { toRhythTextColor } from "../../common/utils";

type Props = {
  name: string;
  color: string;
  handleOpenEditModal: () => void;
  handleOpenDeleteModal: () => void;
};

export const TagsItem: FC<Props> = ({ name, color, handleOpenEditModal, handleOpenDeleteModal }) => {
  return (
    <li className="h-12 flex items-center justify-between w-full border-b-2 border-rhyth-light-gray last:border-none px-4 py-2 rounded-t-lg">
      <div className="flex items-center gap-2">
        <div className={`w-6 h-6 ${toRhythTextColor(color)}`}>
          <TagIcon />
        </div>
        <span>{name}</span>
      </div>
      <div className="flex items-center gap-2">
        <button type="button" onClick={handleOpenEditModal}>
          <div className="w-6 h-6 text-rhyth-dark-blue">
            <EditIcon />
          </div>
        </button>
        <button type="button" onClick={handleOpenDeleteModal}>
          <div className="w-5 h-5 text-rhyth-red">
            <DeleteIcon />
          </div>
        </button>
      </div>
    </li>
  );
};
