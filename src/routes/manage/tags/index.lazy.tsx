import { createLazyFileRoute } from "@tanstack/react-router";
import { Loading, LoadingContainer } from "../../../features/common/components";
import { AppLayout } from "../../../features/common/components/layouts/AppLayout";
import { TagsPresenter } from "../../../features/manage/tags/components/TagsPresenter";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/manage/tags/")({
  component: () => <Tags />,
});

const Tags = () => {
  return (
    <AppLayout>
      <Suspense
        fallback={
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        }
      >
        <TagsPresenter />
      </Suspense>
    </AppLayout>
  );
};
