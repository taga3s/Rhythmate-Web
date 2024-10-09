import { createLazyFileRoute } from "@tanstack/react-router";
import { AnalyticsPresenter } from "../../features/analytics/presenters/AnalyticsPresenter";
import { AppLayout, Loading, LoadingContainer } from "../../features/common/components";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/analytics/")({
  component: () => <Analytics />,
});

const Analytics = () => {
  return (
    <AppLayout>
      <Suspense
        fallback={
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        }
      >
        <AnalyticsPresenter />
      </Suspense>
    </AppLayout>
  );
};
