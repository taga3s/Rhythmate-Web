import { createLazyFileRoute } from "@tanstack/react-router";
import { Header, Menu } from "../../../features/common/components";

export const Route = createLazyFileRoute("/quests/analytics/")({
  component: () => <Analytics />,
});

const Analytics = () => {
  return (
    <>
      <Header />
      <div>統計レポートページです。</div>
      <Menu />
    </>
  );
};
