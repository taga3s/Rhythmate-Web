import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/quests/manage/")({
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: "/login",
      });
    }
  },
});
