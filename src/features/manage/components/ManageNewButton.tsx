import { useNavigate } from "@tanstack/react-router";
import { AddIcon } from "../../common/components/icons";

export const ManageNewButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate({ to: "/manage/new" })}
      className="flex justify-between items-center gap-2 bg-rhyth-blue hover:bg-rhyth-hover-blue h-14 w-auto rounded-full fixed right-8 bottom-24 shadow-lg p-4"
    >
      <span className="font-noto-sans font-medium text-white tracking-wider">クエスト新規作成</span>
      <div className="w-8 h-8">
        <AddIcon />
      </div>
    </button>
  );
};
