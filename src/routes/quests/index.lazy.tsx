import { createLazyFileRoute } from "@tanstack/react-router";
import { Menu } from "../../features/common/components/Menu";
import { Header } from "../../features/common/components/Header";
import { ContentLayout } from "../../features/common/components/layouts/ContentLayout";

export const Route = createLazyFileRoute("/quests/")({
  component: () => <Quests />,
});

const Quests = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <div>クエスト一覧ページです。</div>
      </ContentLayout>
      <Menu />
    </>
  );
};
