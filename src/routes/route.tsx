import { createFileRoute } from "@tanstack/react-router";
import { EntrancePresenter } from "../features/entrance/components/EntrancePresenter";

export const Route = createFileRoute("/")({
  component: () => <Entrance />,
});

const Entrance = () => {
  return <EntrancePresenter />;
};
