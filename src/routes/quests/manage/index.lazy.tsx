import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, Menu } from "../../../features/common/components";

export const Route = createLazyFileRoute("/quests/manage/")({
  component: () => <Manage />,
});

const Manage = () => {
  return (
    <>
      <Header />
      <div>クエスト作成・編集ページです。</div>
      <Menu />
    </>
  );
};
