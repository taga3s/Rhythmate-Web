import { createLazyFileRoute } from "@tanstack/react-router";
import { EntrancePresenter } from "../features/entrance/components/EntrancePresenter";
import { CopyrightLayout } from "../features/common/components/layouts/CopyrightLayout";

export const Route = createLazyFileRoute("/")({
  component: () => <Entrance />,
});

const Entrance = () => {
  return (
    <CopyrightLayout>
      <EntrancePresenter />
    </CopyrightLayout>
  );
};
