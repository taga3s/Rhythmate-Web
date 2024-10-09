import { createLazyFileRoute } from "@tanstack/react-router";
import { AppLayout, Loading, LoadingContainer } from "../../features/common/components";
import { ProfilePresenter } from "../../features/profile/presenters/ProfilePresenter";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/profile/")({
  component: () => <Profile />,
});

const Profile = () => {
  return (
    <AppLayout>
      <Suspense
        fallback={
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        }
      >
        <ProfilePresenter />
      </Suspense>
    </AppLayout>
  );
};
