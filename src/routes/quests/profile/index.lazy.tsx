import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, Menu } from "../../../features/common/components";

export const Route = createLazyFileRoute("/quests/profile/")({
  component: () => <Profile />,
});

const Profile = () => {
  return (
    <>
      <Header />
      <div>プロフィールページです。</div>
      <Menu />
    </>
  );
};
