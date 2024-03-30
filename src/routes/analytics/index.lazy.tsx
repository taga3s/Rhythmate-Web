import { createLazyFileRoute } from "@tanstack/react-router";
import { ContentLayout, Header, Menu } from "../../features/common/components";
import { AnalyticsPresenter } from "../../features/analytics/components/AnalyticsPresenter";

export const Route = createLazyFileRoute("/analytics/")({
  component: () => <Analytics />,
});

const Analytics = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <AnalyticsPresenter />
      </ContentLayout>
      <Menu />
    </>
  );
};
