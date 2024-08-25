import { createLazyFileRoute } from "@tanstack/react-router";
import { AppLayout, Loading, LoadingContainer } from "../../features/common/components";
import { SearchModalIsOpenProvider } from "../../features/common/contexts/searchModalIsOpenContext";
import { ManagePresenter } from "../../features/manage/components/ManagePresenter";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/manage/")({
  component: () => <Manage />,
});

const Manage = () => {
  return (
    <SearchModalIsOpenProvider>
      <AppLayout>
        <Suspense
          fallback={
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          }
        >
          <ManagePresenter />
        </Suspense>
      </AppLayout>
    </SearchModalIsOpenProvider>
  );
};
