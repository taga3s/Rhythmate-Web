import { createLazyFileRoute } from "@tanstack/react-router";
import { AppLayout, Loading, LoadingContainer } from "../../features/common/components";
import { Suspense } from "react";
import { QuestsPresenter } from "../../features/quests/presenters/QuestsPresenter";

export const Route = createLazyFileRoute("/quests/")({
  component: () => <Quests />,
});

const Quests = () => {
  return (
    <AppLayout>
      <Suspense
        fallback={
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        }
      >
        <QuestsPresenter />
      </Suspense>
    </AppLayout>
  );
};
