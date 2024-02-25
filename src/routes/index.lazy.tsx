import { createLazyFileRoute } from "@tanstack/react-router";
import { EntrancePresenter } from "../features/entrance/components/EntrancePresenter";

export const Route = createLazyFileRoute("/")({
  component: () => <Entrance />,
});

const Entrance = () => {
  return <EntrancePresenter />;
};
