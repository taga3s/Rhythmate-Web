import { Outlet, ScrollRestoration, createRootRoute } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";

export const Route = createRootRoute({
  component: () => (
    <div className="font-noto-sans-jp">
      <ScrollRestoration />
      <Outlet />
      <Toaster
        containerStyle={{
          top: "64px",
        }}
      />
    </div>
  ),
});
