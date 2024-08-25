import { createLazyFileRoute } from "@tanstack/react-router";
import { AppLayout, Loading, LoadingContainer } from "../../features/common/components";
import { QuestsPresenter } from "../../features/quests/components/QuestsPresenter";
import { Suspense } from "react";

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
