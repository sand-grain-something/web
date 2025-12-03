import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Nippo } from "./font";

import Navbar from "@/components/common/navbar";

export const metadata: Metadata = {
  title: "Sand Grain Something",
  description: "Some description about it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${Nippo.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <Navbar /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
