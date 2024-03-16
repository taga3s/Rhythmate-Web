import { HeaderButton } from "./HeaderButton";

export const HeaderQuests = () => {
  return (
    <header className="w-full px-4 py-2 shadow-md bg-rhyth-bg-gray fixed top-0 left-0 right-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div>
            <img src="/brand-logo.svg" alt="rhythmateのロゴ" className="w-12" />
          </div>
          <h1 className="font-cp-font text-xl text-rhyth-dark-blue tracking-wider">今日の一覧</h1>
        </div>
      </div>
      <div>
        <HeaderButton icon="Bell" />
      </div>
    </header>
  );
};
