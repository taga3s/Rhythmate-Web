import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, Loading, LoadingContainer, Menu } from "../../../features/common/components";
import { ContentLayout } from "../../../features/common/components/layouts/ContentLayout";
import { TagsPresenter } from "../../../features/manage/tags/components/TagsPresenter";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/manage/tags/")({
  component: () => <Tags />,
});

const Tags = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <Suspense
          fallback={
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          }
        >
          <TagsPresenter />
        </Suspense>
      </ContentLayout>
      <Menu />
    </>
  );
};
