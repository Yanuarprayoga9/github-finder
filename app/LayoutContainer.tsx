"use client"
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface LayoutProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

const LayoutContainer: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <div className="flex min-h-screen w-full bg-stone-100 p-1.5 sm:p-4 pt-10 sm:pt-12 transition-all  dark:bg-slate-900 ">
          <div className="  mx-auto flex w-full max-w-[600px] flex-col gap-8  rounded p-2">
            <Header />
            {children}
          </div>
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default LayoutContainer;
