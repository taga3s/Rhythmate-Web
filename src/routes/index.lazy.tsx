import { createLazyFileRoute } from "@tanstack/react-router";
import { BeforeLoginLayout } from "../features/common/components/layouts";
import { EntrancePresenter } from "../features/entrance/presenters/EntrancePresenter";

export const Route = createLazyFileRoute("/")({
  component: () => <Entrance />,
});

const Entrance = () => {
  return (
    <BeforeLoginLayout>
      <EntrancePresenter />
    </BeforeLoginLayout>
  );
};
