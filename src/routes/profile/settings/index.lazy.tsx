import { createLazyFileRoute } from "@tanstack/react-router";
import { AppLayout, Loading, LoadingContainer } from "../../../features/common/components";
import { SettingsPresenter } from "../../../features/profile/settings/presenters/SettingsPresenter";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/profile/settings/")({
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
        <SettingsPresenter />
      </Suspense>
    </AppLayout>
  );
};
