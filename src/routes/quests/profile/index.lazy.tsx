import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, Menu } from "../../../features/common/components";
import { ProfilePresenter } from "../../../features/profile/components/ProfilePresenter";

export const Route = createLazyFileRoute("/quests/profile/")({
  component: () => <Profile />,
});

const Profile = () => {
  return (
    <>
      <Header />
      <ProfilePresenter />
      <Menu />
    </>
  );
};
