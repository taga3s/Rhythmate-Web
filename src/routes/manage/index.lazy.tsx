import { createLazyFileRoute } from "@tanstack/react-router";
import { ContentLayout, Header, Loading, LoadingContainer, Menu } from "../../features/common/components";
import { SearchModalIsOpenProvider } from "../../features/common/contexts/searchModalIsOpenContext";
import { ManagePresenter } from "../../features/manage/components/ManagePresenter";
import { Suspense } from "react";
import { FadeInLayout } from "../../features/common/components/layouts/FadeInLayout";

export const Route = createLazyFileRoute("/manage/")({
  component: () => <Manage />,
});

const Manage = () => {
  return (
    <SearchModalIsOpenProvider>
      <Header />
      <FadeInLayout>
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
      </FadeInLayout>
      <Menu />
    </SearchModalIsOpenProvider>
  );
};
