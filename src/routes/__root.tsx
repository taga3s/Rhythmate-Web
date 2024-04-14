import { createRootRoute, Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

export const Route = createRootRoute({
  component: () => (
    <div className="font-noto-sans-jp">
      {/* TODO: Suspense fallback */}
      <Suspense fallback={<></>}>
        <ScrollRestoration />
        <Outlet />
        <Toaster
          containerStyle={{
            top: "64px",
          }}
        />
      </Suspense>
    </div>
  ),
});
