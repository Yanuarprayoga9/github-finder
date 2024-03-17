import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const spacemono = Space_Mono({
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Dev-finder",
  description: "Generated by create me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <body
        className={cn(
          spacemono.className,
          "debug-screens",
          "dark:bg-mainDark light:bg-mainLight bg-main"
        )}
      >
        <div className="flex min-h-screen w-full bg-stone-100 p-1.5 sm:p-4 pt-10 sm:pt-12 transition-all  dark:bg-slate-900 ">
          <div className="  mx-auto flex w-full max-w-[600px] flex-col gap-8  rounded p-2">
            <Header />
            {children}
          </div>
        </div>
      </body>
      </ThemeProvider>/
    </html>
  );
}
