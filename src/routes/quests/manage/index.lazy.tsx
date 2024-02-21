import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, Menu } from "../../../features/common/components";
import { ManagePresenter } from "../../../features/manage/components/ManagePresenter";

export const Route = createLazyFileRoute("/quests/manage/")({
  component: () => <Manage />,
});

const Manage = () => {
  return (
    <>
      <Header />
      <ManagePresenter />
      <Menu />
    </>
  );
};
