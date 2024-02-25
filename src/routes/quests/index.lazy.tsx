import { createLazyFileRoute } from "@tanstack/react-router";
import { Menu } from "../../features/common/components/Menu";
import { Header } from "../../features/common/components/Header";
import { ContentLayout } from "../../features/common/components/layouts/ContentLayout";
import { QuestsPresenter } from "../../features/quests/components/QuestsPresenter";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/quests/")({
  component: () => <Quests />,
});

const Quests = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <Suspense fallback={<div>Loading</div>}>
          <QuestsPresenter />
        </Suspense>
      </ContentLayout>
      <Menu />
    </>
  );
};
