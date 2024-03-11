import type { Metadata } from "next";

import "./globals.css";
import { inter } from "@/ui/fonts";
import Sidebar from "@/ui/sidebar";
import Header from "@/ui/header";

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
      <body className={`${inter.className} flex`}>
        <Sidebar />
        <div className="w-[85%] min-h-[100vh]">
          <Header />
          <main className="mx-20 relative min-h-[91vh]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
