import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SearchProvider } from "@/lib/searchQueryConext";
import { ReactNode } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Menu } from "@/app/components/menu-bar/menu";
import { SideBar } from "@/app/components/side-bar/sideBar";

export const dynamic = "force-dynamic";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Giggity",
  description: "Find events near you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SearchProvider>
          <main className={"h-[100svh] w-[100svw]"}>
            <SidebarProvider>
              <SideBar />
              <SidebarInset>
                <Menu />
                <section
                  className={"relative flex h-mainContent w-full overflow-clip"}
                >
                  {children}
                </section>
              </SidebarInset>
            </SidebarProvider>
          </main>
        </SearchProvider>
      </body>
    </html>
  );
}
