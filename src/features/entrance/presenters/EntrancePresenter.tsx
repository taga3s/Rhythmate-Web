import { useNavigate } from "@tanstack/react-router";
import { Image } from "@unpic/react";

export const EntrancePresenter = () => {
  const navigation = useNavigate();

  return (
    <div className="py-16 flex flex-col items-center">
      <div className="my-4">
        <Image width={224} height={60} src="/logo-long.svg" alt="rhythmateのロゴ" />
      </div>
      <div className="flex flex-col gap-7 mt-7">
        <div className="flex gap-4 items-center">
          <Image src="/icons/like.png" layout="constrained" width={80} height={80} alt="like icon" />
          <p className="text-sm font-bold text-rhyth-dark-blue">
            Rhythmateで
            <br />
            ルーティンを
            <br />
            より楽しくしよう
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <Image src="/icons/analysis.png" layout="constrained" width={80} height={80} alt="analysis icon" />
          <p className="text-sm font-bold text-rhyth-dark-blue">
            習慣を可視化して
            <br />
            自分を振り返ろう
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <Image src="/icons/shuttle.png" layout="constrained" width={80} height={80} alt="shuttle icon" />
          <p className="text-sm font-bold text-rhyth-dark-blue">
            良い習慣を身に付けて
            <br />
            アクティブな毎日を
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => navigation({ to: "/login" })}
        className="mt-10  text-center text-white bg-rhyth-blue hover:bg-rhyth-hover-blue font-medium rounded-lg px-10 py-4  shadow-lg"
      >
        今すぐ始める
      </button>
    </div>
  );
};
