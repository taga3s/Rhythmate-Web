import { Link } from "@tanstack/react-router";

export const EntrancePresenter = () => {
  return (
    <div className="py-16 flex flex-col items-center">
      <picture className="my-4 w-[224px] h-[60px]">
        <source srcSet="/logo-long.webp" type="image/webp" />
        <source srcSet="/logo-long.png" type="image/png" />
        <img alt="rhythmateのロゴ" />
      </picture>
      <div className="flex flex-col gap-7 mt-7">
        <div className="flex gap-4 items-center">
          <picture className="w-20 h-20">
            <source srcSet="/icons/like.webp" type="image/webp" />
            <source srcSet="/icons/like.png" type="image/png" />
            <img alt="like icon" />
          </picture>
          <p className="text-sm font-bold text-rhyth-dark-blue">
            Rhythmateで
            <br />
            ルーティンを
            <br />
            より楽しくしよう
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <picture className="w-20 h-20">
            <source srcSet="/icons/analysis.webp" type="image/webp" />
            <source srcSet="/icons/analysis.png" type="image/png" />
            <img alt="analysis icon" />
          </picture>
          <p className="text-sm font-bold text-rhyth-dark-blue">
            習慣を可視化して
            <br />
            自分を振り返ろう
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <picture className="w-20 h-20">
            <source srcSet="/icons/shuttle.webp" type="image/webp" />
            <source srcSet="/icons/shuttle.png" type="image/png" />
            <img alt="shuttle icon" />
          </picture>
          <p className="text-sm font-bold text-rhyth-dark-blue">
            良い習慣を身に付けて
            <br />
            アクティブな毎日を
          </p>
        </div>
      </div>
      <Link
        to="/login"
        className="mt-10  text-center text-white bg-rhyth-blue hover:bg-rhyth-hover-blue font-medium rounded-lg px-10 py-4  shadow-lg"
      >
        今すぐ始める
      </Link>
    </div>
  );
};
