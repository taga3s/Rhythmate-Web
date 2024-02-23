import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, Menu } from "../../../../features/common/components";
import { ContentLayout } from "../../../../features/common/components/layouts/ContentLayout";

export const Route = createLazyFileRoute("/quests/manage/new/")({
  component: () => <New />,
});

const New = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <div>クエスト作成です。</div>
      </ContentLayout>
      <Menu />
    </>
  );
};
