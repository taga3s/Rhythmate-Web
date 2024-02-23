import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="font-noto-sans-jp">
        <Outlet />
        <Toaster
          containerStyle={{
            top: "64px",
          }}
        />
      </div>
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
