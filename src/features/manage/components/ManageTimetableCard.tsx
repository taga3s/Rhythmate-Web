export const ManageTimetableCard = () => {
  return (
    <div className="flex items-center p-2 border-[3px] bg-rhyth-bg-gray border-rhyth-green shadow-lg text-rhyth-dark-blue rounded-lg">
      {/* h-min-16 h-20 h-max-24 */}
      <div className="h-16 flex flex-col items-center justify-center font-cp-font tracking-wider p-2 pr-3 border-r-2 border-rhyth-dark-blue">
        <h2 className="text-lg">9:00</h2>
        <p className="text-sm">10分間</p>
      </div>
      <div className="w-full flex items-center justify-between p-2">
        <h1 className="ml-2 font-cp-font text-md font-bold">本を読む</h1>
        <svg
          className="w-8 h-8 hover:text-rhyth-gray"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};
