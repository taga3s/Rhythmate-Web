import { createLazyFileRoute } from "@tanstack/react-router";
import { ContentLayout, Header, Loading, LoadingContainer, Menu } from "../../features/common/components";
import { SearchModalIsOpenProvider } from "../../features/common/contexts/searchModalIsOpenContext";
import { ManagePresenter } from "../../features/manage/components/ManagePresenter";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/manage/")({
  component: () => <Manage />,
});

const Manage = () => {
  return (
    <SearchModalIsOpenProvider>
      <Header />
      <ContentLayout>
        <Suspense
          fallback={
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          }
        >
          <ManagePresenter />
        </Suspense>
      </ContentLayout>
      <Menu />
    </SearchModalIsOpenProvider>
  );
};
