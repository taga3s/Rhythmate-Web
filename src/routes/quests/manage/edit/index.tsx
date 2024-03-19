import { createFileRoute, redirect } from "@tanstack/react-router";
import { Header, Menu } from "../../../../features/common/components";
import { ContentLayout } from "../../../../features/common/components/layouts/ContentLayout";
import { EditPresenter } from "../../../../features/manage/edit/components/EditPresenter";
import { z } from "zod";

const manageSearchSchema = z.object({
  quest_id: z.string().catch(""),
});

export const Route = createFileRoute("/quests/manage/edit/")({
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: "/login",
      });
    }
  },
  validateSearch: manageSearchSchema,
  component: () => <Edit />,
});

const Edit = () => {
  const { quest_id } = Route.useSearch();
  return (
    <>
      <Header />
      <ContentLayout>
        <EditPresenter quest_id={quest_id} />
      </ContentLayout>
      <Menu />
    </>
  );
};
