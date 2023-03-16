"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const Wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <Toaster
      toastOptions={{
        // Define default options
        className: "bg-white text-green-500",
        duration: 5000,

        // Default options for specific types
        success: {
          className: "bg-white text-green-500",
          duration: 10000,
          theme: {
            primary: "green",
            secondary: "black",
          },
        },
      }}
    />
    {children}
  </QueryClientProvider>
);

export default Wrapper;
