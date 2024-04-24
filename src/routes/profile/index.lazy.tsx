import { createLazyFileRoute } from "@tanstack/react-router";
import { ContentLayout, Header, Menu } from "../../features/common/components";
import { ProfilePresenter } from "../../features/profile/components/ProfilePresenter";

export const Route = createLazyFileRoute("/profile/")({
  component: () => <Profile />,
});

const Profile = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <ProfilePresenter />
      </ContentLayout>
      <Menu />
    </>
  );
};
