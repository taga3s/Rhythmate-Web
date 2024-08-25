import { createLazyFileRoute } from "@tanstack/react-router";
import { AppLayout, Loading, LoadingContainer } from "../../../features/common/components";
import { BadgesPresenter } from "../../../features/profile/badges/components/BadgesPresenter";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/profile/badges/")({
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
        <BadgesPresenter />
      </Suspense>
    </AppLayout>
  );
};
