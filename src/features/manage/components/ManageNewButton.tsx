import { useNavigate } from "@tanstack/react-router";

export const ManageNewButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate({ to: "/manage/new" })}
      className="flex justify-center items-center bg-rhyth-blue h-16 w-16 rounded-full fixed right-12 bottom-24 shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="white"
        className="w-10 h-10"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  );
};
