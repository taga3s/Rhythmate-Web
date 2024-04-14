import { createLazyFileRoute } from "@tanstack/react-router";
import { Menu, Header, ContentLayout } from "../../features/common/components";
import { QuestsPresenter } from "../../features/quests/components/QuestsPresenter";
import { AuthenticateWrapper } from "../../features/common/components/AuthenticateWrapper";

export const Route = createLazyFileRoute("/quests/")({
  component: () => <Quests />,
});

const Quests = () => {
  return (
    <AuthenticateWrapper>
      <Header />
      <ContentLayout>
        <QuestsPresenter />
      </ContentLayout>
      <Menu />
    </AuthenticateWrapper>
  );
};
