import { createLazyFileRoute } from "@tanstack/react-router";
import { ContentLayout, Header, Menu } from "../../../features/common/components";
import { SettingsPresenter } from "../../../features/profile/settings/components/SettingsPresenter";
import { AuthenticateWrapper } from "../../../features/common/components/AuthenticateWrapper";

export const Route = createLazyFileRoute("/profile/settings/")({
  component: () => <Profile />,
});

const Profile = () => {
  return (
    <AuthenticateWrapper>
      <Header />
      <ContentLayout>
        <SettingsPresenter />
      </ContentLayout>
      <Menu />
    </AuthenticateWrapper>
  );
};
