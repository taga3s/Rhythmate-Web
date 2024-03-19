import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./index.css";
import { routeTree } from "./routeTree.gen";
import { useAuthenticate } from "./features/common/hooks/useAuthenticate";
const router = createRouter({ routeTree, context: { isAuthenticated: undefined! } });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const { isAuthenticated } = useAuthenticate();
  return <RouterProvider router={router} context={{ isAuthenticated }} />;
}

export default App;
