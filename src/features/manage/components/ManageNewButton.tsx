import { useNavigate } from "@tanstack/react-router";

export const ManageNewButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate({ to: "/manage/new" })}
      className="flex justify-between items-center gap-2 bg-rhyth-blue h-14 w-auto rounded-full fixed right-8 bottom-24 shadow-lg p-4"
    >
      <span className="font-noto-sans font-medium text-white tracking-wider">クエスト新規作成</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="white"
        className="w-8 h-8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  );
};
