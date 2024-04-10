import { createLazyFileRoute } from "@tanstack/react-router";
import { ContentLayout, Header, Menu } from "../../../features/common/components";
import { SettingsPresenter } from "../../../features/profile/settings/components/SettingsPresenter";

export const Route = createLazyFileRoute("/profile/settings/")({
  component: () => <Profile />,
});

const Profile = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <SettingsPresenter />
      </ContentLayout>
      <Menu />
    </>
  );
};
