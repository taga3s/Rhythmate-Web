const badges = [
  {
    text: "ユーザーレベルが10になった",
    image: "../../../public/badges/crown1.png",
  },
  {
    text: "ユーザーレベルが100になった",
    image: "../../../public/badges/crown2.png",
  },
  {
    text: "ユーザーレベルが999になった",
    image: "../../../public/badges/crown3.png",
  },
  {
    text: "クエストを100回完了した",
    image: "../../../public/badges/gem1.png",
  },
  {
    text: "クエストを1000回完了した",
    image: "../../../public/badges/gem2.png",
  },
  {
    text: "クエストを3000回完了した",
    image: "../../../public/badges/gem3.png",
  },
  {
    text: "10日間連続でコンプリートした",
    image: "../../../public/badges/shield1.png",
  },
  {
    text: "100日間連続でコンプリートした",
    image: "../../../public/badges/shield2.png",
  },
  {
    text: "1000日間連続でコンプリートした",
    image: "../../../public/badges/shield3.png",
  },
];
export const BadgesPresenter = () => {
  const achievementDate = new Date().toLocaleDateString(); // 仮の達成日時
  return (
    <>
      <div className="flex flex-col items-center w-full mx-auto">
        <h2 className="text-xl font-bold">獲得バッジ一覧</h2>
        <table className="mt-6 border mx-auto">
          <tbody>
            {badges.map((badge, index) => (
              <tr className="grid grid-flow-row-dense grid-cols-3 gap-3" key={index}>
                <td className="col-span-1">
                  <img src={badge.image} alt={badge.text} />
                </td>
                <td className="flex flex-col col-span-2 ">
                  <div className="flex justify-end">達成日時:{achievementDate}</div>
                  <div className="flex items-center text-xl">{badge.text}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
