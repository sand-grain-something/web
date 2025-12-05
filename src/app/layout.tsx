import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Nippo } from "./font";

import SmartNavbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Sand Analysis Mapping System - Automated Grain Size Estimation",
  description: "Low-cost camera-based automated mapping system for beach sediment grain size estimation, classification, and GPS mapping.",
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
          <SmartNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
