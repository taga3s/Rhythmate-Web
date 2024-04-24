import { createLazyFileRoute } from "@tanstack/react-router";
import { AnalyticsPresenter } from "../../features/analytics/components/AnalyticsPresenter";
import { ContentLayout, Header, Menu } from "../../features/common/components";

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
