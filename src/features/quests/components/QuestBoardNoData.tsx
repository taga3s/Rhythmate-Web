export const QuestBoardNoData = () => {
  return (
    <div className="w-full min-h-[240px] p-3 shadow-lg rounded-lg flex flex-col items-center justify-center bg-white">
      <div className="relative w-20 h-20">
        <picture className="w-full h-full">
          <source srcSet="/icons/like.webp" type="image/webp" />
          <source srcSet="/icons/like.png" type="image/png" />
          <img alt="like icon" />
        </picture>
        <span className="font-cp-font absolute top-1 right-[-3.8rem] text-rhyth-blue tracking-widest origin-top-left rotate-[20deg]">
          Good!
        </span>
      </div>
      <span className="font-bold text-center p-2 text-rhyth-dark-blue">
        今日のクエストは終了しました。
        <br />
        お疲れさまでした!
      </span>
    </div>
  );
};
