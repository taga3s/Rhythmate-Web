import { createLazyFileRoute } from "@tanstack/react-router";
import { ContentLayout, Header, Loading, LoadingContainer, Menu } from "../../../features/common/components";
import { SettingsPresenter } from "../../../features/profile/settings/components/SettingsPresenter";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/profile/settings/")({
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
          <SettingsPresenter />
        </Suspense>
      </ContentLayout>
      <Menu />
    </>
  );
};
