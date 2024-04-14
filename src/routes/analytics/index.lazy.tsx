import { createLazyFileRoute } from "@tanstack/react-router";
import { ContentLayout, Header, Menu } from "../../features/common/components";
import { AnalyticsPresenter } from "../../features/analytics/components/AnalyticsPresenter";
import { AuthenticateWrapper } from "../../features/common/components/AuthenticateWrapper";

export const Route = createLazyFileRoute("/analytics/")({
  component: () => <Analytics />,
});

const Analytics = () => {
  return (
    <AuthenticateWrapper>
      <Header />
      <ContentLayout>
        <AnalyticsPresenter />
      </ContentLayout>
      <Menu />
    </AuthenticateWrapper>
  );
};
