import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, Menu, ContentLayout } from "../../../features/common/components";
import { BadgesPresenter } from "../../../features/profile/badges/components/BadgesPresenter";
import { AuthenticateWrapper } from "../../../features/common/components/AuthenticateWrapper";

export const Route = createLazyFileRoute("/profile/badges/")({
  component: () => <Profile />,
});

const Profile = () => {
  return (
    <AuthenticateWrapper>
      <Header />
      <ContentLayout>
        <BadgesPresenter />
      </ContentLayout>
      <Menu />
    </AuthenticateWrapper>
  );
};
