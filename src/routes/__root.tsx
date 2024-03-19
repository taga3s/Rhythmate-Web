import { createRootRouteWithContext, Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../features/common/hooks/useAuthenticate";

export const Route = createRootRouteWithContext<AuthContext>()({
  component: () => (
    <>
      <div className="font-noto-sans-jp">
        <ScrollRestoration />
        <Outlet />
        <Toaster
          containerStyle={{
            top: "64px",
          }}
        />
      </div>
    </>
  ),
});
