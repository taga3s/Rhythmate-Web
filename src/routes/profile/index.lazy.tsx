import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, Menu, ContentLayout } from "../../features/common/components";
import { ProfilePresenter } from "../../features/profile/components/ProfilePresenter";
import { AuthenticateWrapper } from "../../features/common/components/AuthenticateWrapper";

export const Route = createLazyFileRoute("/profile/")({
  component: () => <Profile />,
});

const Profile = () => {
  return (
    <AuthenticateWrapper>
      <Header />
      <ContentLayout>
        <ProfilePresenter />
      </ContentLayout>
      <Menu />
    </AuthenticateWrapper>
  );
};
