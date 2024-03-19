import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/quests/manage/new/")({
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: "/login",
      });
    }
  },
});
