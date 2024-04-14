import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ContentLayout, Header, Menu } from "../../../features/common/components";
import { EditPresenter } from "../../../features/manage/edit/components/EditPresenter";
import { AuthenticateWrapper } from "../../../features/common/components/AuthenticateWrapper";

const manageSearchSchema = z.object({
  quest_id: z.string().catch(""),
});

export const Route = createFileRoute("/manage/edit/")({
  validateSearch: manageSearchSchema,
  component: () => <Edit />,
});

const Edit = () => {
  const { quest_id } = Route.useSearch();
  return (
    <AuthenticateWrapper>
      <Header />
      <ContentLayout>
        <EditPresenter quest_id={quest_id} />
      </ContentLayout>
      <Menu />
    </AuthenticateWrapper>
  );
};
