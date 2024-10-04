import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/client/queryClient";
import { CookiesProvider } from "react-cookie";
import App from "./app";
import "./index.css";

const rootElement = document.getElementById("app");

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <CookiesProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </CookiesProvider>
    </StrictMode>,
  );
}
