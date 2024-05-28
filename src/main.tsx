import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/GlobalStyle.ts";
import { theme } from "./styles/theme.ts";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </QueryClientProvider>
);
