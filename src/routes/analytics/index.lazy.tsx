import { createLazyFileRoute } from "@tanstack/react-router";
import { AnalyticsPresenter } from "../../features/analytics/components/AnalyticsPresenter";
import { ContentLayout, Header, Loading, LoadingContainer, Menu } from "../../features/common/components";
import { Suspense } from "react";
import { FadeInLayout } from "../../features/common/components/layouts/FadeInLayout";

export const Route = createLazyFileRoute("/analytics/")({
  component: () => <Analytics />,
});

const Analytics = () => {
  return (
    <>
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
            <AnalyticsPresenter />
          </Suspense>
        </ContentLayout>
      </FadeInLayout>
      <Menu />
    </>
  );
};
