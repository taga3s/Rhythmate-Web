import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, Menu } from "../../../../features/common/components";
import { ContentLayout } from "../../../../features/common/components/layouts/ContentLayout";
import { EditPresenter } from "../../../../features/manage/edit/components/EditPresenter";

export const Route = createLazyFileRoute("/quests/manage/edit/")({
  component: () => <Edit />,
});

const Edit = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <EditPresenter />
      </ContentLayout>
      <Menu />
    </>
  );
};
