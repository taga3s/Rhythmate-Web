import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, Menu } from "../../../features/common/components";
import { ContentLayout } from "../../../features/common/components/layouts/ContentLayout";
import { TagsPresenter } from "../../../features/manage/tags/components/TagsPresenter";
import { AuthenticateWrapper } from "../../../features/common/components/AuthenticateWrapper";

export const Route = createLazyFileRoute("/manage/tags/")({
  component: () => <Tags />,
});

const Tags = () => {
  return (
    <AuthenticateWrapper>
      <Header />
      <ContentLayout>
        <TagsPresenter />
      </ContentLayout>
      <Menu />
    </AuthenticateWrapper>
  );
};
