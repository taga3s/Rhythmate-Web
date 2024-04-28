import { createLazyFileRoute } from "@tanstack/react-router";
import { ContentLayout, Header, Loading, LoadingContainer, Menu } from "../../../features/common/components";
import { NewPresenter } from "../../../features/manage/new/components/NewPresenter";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/manage/new/")({
  component: () => <New />,
});

const New = () => {
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
          <NewPresenter />
        </Suspense>
      </ContentLayout>
      <Menu />
    </>
  );
};
