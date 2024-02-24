export const PlusButton = () => {
  return (
    <button className="flex justify-center items-center bg-[#0087EE] h-16 w-16 rounded-full absolute right-12 bottom-24">
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
