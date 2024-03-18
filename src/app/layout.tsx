import type { Metadata } from "next";

import "./globals.css";
import { inter } from "@/ui/fonts";
import Sidebar from "@/ui/sidebar";
import Header from "@/ui/header";
import NavMenuMobile from "@/ui/nav-menu-mobile";

export const metadata: Metadata = {
  title: "Movie trailers",
  description: "Movie trailers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <div className="min-h-[91vh] grid grid-cols-6">
          <Sidebar />
          <main className="md:mx-10 lg:mx-20 my-10 relative col-span-6 lg:col-span-5">
            {children}
          </main>
        </div>
        <NavMenuMobile />
      </body>
    </html>
  );
}
