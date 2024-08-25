import { createLazyFileRoute } from "@tanstack/react-router";
import { AppLayout, Loading, LoadingContainer, Menu } from "../../../features/common/components";
import { NewPresenter } from "../../../features/manage/new/components/NewPresenter";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/manage/new/")({
  component: () => <New />,
});

const New = () => {
  return (
    <>
      <AppLayout>
        <Suspense
          fallback={
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          }
        >
          <NewPresenter />
        </Suspense>
      </AppLayout>
      <Menu />
    </>
  );
};
