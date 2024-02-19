import { createLazyFileRoute } from "@tanstack/react-router";
import { Menu } from "../../features/common/components/Menu";

export const Route = createLazyFileRoute("/quests/")({
  component: () => <Quests />,
});

const Quests = () => {
  return (
    <>
      <div>クエスト一覧ページです。</div>
      <Menu />
    </>
  );
};
