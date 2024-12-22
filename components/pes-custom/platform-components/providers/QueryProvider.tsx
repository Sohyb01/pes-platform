"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

const QueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
