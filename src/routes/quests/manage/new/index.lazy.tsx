import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, Menu } from "../../../../features/common/components";
import { ContentLayout } from "../../../../features/common/components/layouts/ContentLayout";
import { NewPresenter } from "../../../../features/manage/new/components/NewPresenter";

export const Route = createLazyFileRoute("/quests/manage/new/")({
  component: () => <New />,
});

const New = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <NewPresenter />
      </ContentLayout>
      <Menu />
    </>
  );
};
