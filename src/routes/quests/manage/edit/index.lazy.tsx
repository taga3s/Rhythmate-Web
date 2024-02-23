import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, Menu } from "../../../../features/common/components";
import { ContentLayout } from "../../../../features/common/components/layouts/ContentLayout";

export const Route = createLazyFileRoute("/quests/manage/edit/")({
  component: () => <Edit />,
});

const Edit = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <div>クエスト編集です。</div>
      </ContentLayout>
      <Menu />
    </>
  );
};
