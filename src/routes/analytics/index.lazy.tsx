import { createLazyFileRoute } from "@tanstack/react-router";
import { AnalyticsPresenter } from "../../features/analytics/components/AnalyticsPresenter";
import { ContentLayout, Header, Loading, LoadingContainer, Menu } from "../../features/common/components";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/analytics/")({
  component: () => <Analytics />,
});

const Analytics = () => {
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
          <AnalyticsPresenter />
        </Suspense>
      </ContentLayout>
      <Menu />
    </>
  );
};
