import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, Menu } from "../../../../features/common/components";
import { ContentLayout } from "../../../../features/common/components/layouts/ContentLayout";
import { BadgesPresenter } from "../../../../features/profile/badges/components/BadgesPresenter";

export const Route = createLazyFileRoute("/quests/profile/badges/")({
  component: () => <Profile />,
});

const Profile = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <BadgesPresenter />
      </ContentLayout>
      <Menu />
    </>
  );
};
