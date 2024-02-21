import { createLazyFileRoute } from "@tanstack/react-router";
import { AnalyticsPresenter } from "../../../features/analytics/components/AnalyticsPresenter";
import { Header, Menu } from "../../../features/common/components";

export const Route = createLazyFileRoute("/quests/analytics/")({
  component: () => <Analytics />,
});

const Analytics = () => {
  return (
    <>
      <Header />
      <AnalyticsPresenter />
      <Menu />
    </>
  );
};
