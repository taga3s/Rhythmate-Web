import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { AppLayout, Loading, LoadingContainer } from "../../../features/common/components";
import { EditPresenter } from "../../../features/manage/edit/presenters/EditPresenter";
import { Suspense } from "react";

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
    <AppLayout>
      <Suspense
        fallback={
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        }
      >
        <EditPresenter quest_id={quest_id} />
      </Suspense>
    </AppLayout>
  );
};
