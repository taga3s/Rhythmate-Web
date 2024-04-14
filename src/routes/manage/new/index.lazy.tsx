import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, Menu, ContentLayout } from "../../../features/common/components";
import { NewPresenter } from "../../../features/manage/new/components/NewPresenter";
import { AuthenticateWrapper } from "../../../features/common/components/AuthenticateWrapper";

export const Route = createLazyFileRoute("/manage/new/")({
  component: () => <New />,
});

const New = () => {
  return (
    <AuthenticateWrapper>
      <Header />
      <ContentLayout>
        <NewPresenter />
      </ContentLayout>
      <Menu />
    </AuthenticateWrapper>
  );
};
