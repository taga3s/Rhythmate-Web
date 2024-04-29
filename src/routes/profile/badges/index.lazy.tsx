import { createLazyFileRoute } from "@tanstack/react-router";
import { ContentLayout, Header, Loading, LoadingContainer, Menu } from "../../../features/common/components";
import { BadgesPresenter } from "../../../features/profile/badges/components/BadgesPresenter";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/profile/badges/")({
  component: () => <Profile />,
});

const Profile = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <Suspense
          fallback={
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          }
        >
          <BadgesPresenter />
        </Suspense>
      </ContentLayout>
      <Menu />
    </>
  );
};
