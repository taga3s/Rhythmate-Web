import { createLazyFileRoute } from "@tanstack/react-router";
import { Menu } from "../../features/common/components/Menu";
import { Header } from "../../features/common/components/header/Header";
import { ContentLayout } from "../../features/common/components/layouts/ContentLayout";
import { QuestsPresenter } from "../../features/quests/components/QuestsPresenter";

export const Route = createLazyFileRoute("/quests/")({
  component: () => <Quests />,
});

const Quests = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <QuestsPresenter />
      </ContentLayout>
      <Menu />
    </>
  );
};
