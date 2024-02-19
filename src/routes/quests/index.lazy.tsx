import { createLazyFileRoute } from "@tanstack/react-router";
import { Menu } from "../../features/common/components/Menu";
import { Header } from "../../features/common/components/Header";

export const Route = createLazyFileRoute("/quests/")({
  component: () => <Quests />,
});

const Quests = () => {
  return (
    <>
      <Header />
      <div>クエスト一覧ページです。</div>
      <Menu />
    </>
  );
};
