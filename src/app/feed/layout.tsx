"use client";

import React from "react";
import { motion } from "motion/react";
import { IconArrowLeft, IconBrandTabler } from "@tabler/icons-react";
import { BadgeQuestionMark, Database, MapIcon, Microscope } from "lucide-react";
import { ModeToggle } from "@/components/common/mode-toggle";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      label: "Dashboard",
      href: "/feed",
      icon: <IconBrandTabler className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Explore Data",
      href: "/feed/data",
      icon: <Database className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Sand Analysis",
      href: "/feed/anal",
      icon: <Microscope className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Explore Map",
      href: "/feed/map",
      icon: <MapIcon className="h-5 w-5 shrink-0" />,
    },

    {
      label: "Get Help",
      href: "/feed/help",
      icon: <BadgeQuestionMark className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Go Back",
      href: "/",
      icon: <IconArrowLeft className="h-5 w-5 shrink-0" />,
    },
  ];

  return (
    <div className="flex w-full">
      <nav className="bg-muted fixed h-screen p-4 w-52 flex flex-col justify-between">
        <h1 className="flex items-center justify-between">
          <span>SandScape</span>
          <ModeToggle />
        </h1>

        <div className="grid gap-4">
          {links.map((link, idx) => (
            <Link
              href={link.href}
              className="flex items-center gap-1 cursor-pointer"
              key={idx}
            >
              {link.icon}
              <motion.span
                initial={{
                  marginLeft: 0,
                }}
                whileHover={{
                  marginLeft: 4,
                }}
              >
                {link.label}
              </motion.span>
            </Link>
          ))}
        </div>
      </nav>
      <div className="ml-52 flex-1">{children}</div>
    </div>
  );
}
