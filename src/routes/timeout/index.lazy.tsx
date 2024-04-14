import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, ContentLayout } from "../../features/common/components";
import { SessionTimeoutPresenter } from "../../features/session-timeout/components/SessionTimeoutPresenter";

export const Route = createLazyFileRoute("/timeout/")({
  component: () => <SessionTimeout />,
});

const SessionTimeout = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <SessionTimeoutPresenter />
      </ContentLayout>
    </>
  );
};
