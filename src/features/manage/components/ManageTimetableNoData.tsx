export const ManageTimetableNoData = () => {
  return (
    <div className="flex flex-col gap-4 bg-rhyth-light-blue p-4 rounded-b-lg">
      <div className="min-h-16 flex items-center justify-center text-lg font-medium text-rhyth-dark-blue bg-white p-2 rounded-lg">
        <p className="font-cp-font tracking-wider">この曜日のクエストはありません</p>
      </div>
    </div>
  );
};
