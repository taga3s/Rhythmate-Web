import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, Menu, ContentLayout } from "../../../features/common/components";
import { NewPresenter } from "../../../features/manage/new/components/NewPresenter";

export const Route = createLazyFileRoute("/manage/new/")({
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
