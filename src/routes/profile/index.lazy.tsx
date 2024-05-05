import { createLazyFileRoute } from "@tanstack/react-router";
import { ContentLayout, Header, Loading, LoadingContainer, Menu } from "../../features/common/components";
import { ProfilePresenter } from "../../features/profile/components/ProfilePresenter";
import { Suspense } from "react";
import { FadeInLayout } from "../../features/common/components/layouts/FadeInLayout";

export const Route = createLazyFileRoute("/profile/")({
  component: () => <Profile />,
});

const Profile = () => {
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
            <ProfilePresenter />
          </Suspense>
        </ContentLayout>
      </FadeInLayout>
      <Menu />
    </>
  );
};
