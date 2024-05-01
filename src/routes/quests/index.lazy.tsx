import { createLazyFileRoute } from "@tanstack/react-router";
import { ContentLayout, Header, Loading, LoadingContainer, Menu } from "../../features/common/components";
import { QuestsPresenter } from "../../features/quests/components/QuestsPresenter";
import { Suspense } from "react";
import { FadeInLayout } from "../../features/common/components/layouts/FadeInLayout";

export const Route = createLazyFileRoute("/quests/")({
  component: () => <Quests />,
});

const Quests = () => {
  return (
    <>
      <Header />
      <FadeInLayout>
        <ContentLayout>
          <Suspense
            fallback={
              <LoadingContainer>
                <Loading />
              </LoadingContainer>
            }
          >
            <QuestsPresenter />
          </Suspense>
        </ContentLayout>
      </FadeInLayout>
      <Menu />
    </>
  );
};
