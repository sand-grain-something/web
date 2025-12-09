"use client";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import React from "react";
import { motion } from "motion/react";
import { IconArrowLeft, IconBrandTabler } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/common/mode-toggle";
import {
  BadgeQuestionMark,
  Biohazard,
  Database,
  MapIcon,
  Microscope,
} from "lucide-react";
import { Dashboard } from "./dashboard";
import { Map } from "./map";
import DataPage from "./data-page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Explore Data",
      href: "#",
      icon: (
        <Database className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Sand Analysis",
      href: "#",
      icon: (
        <Microscope className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Explore Map",
      href: "#",
      icon: (
        <MapIcon className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },

    {
      label: "Get Help",
      href: "#",
      icon: (
        <BadgeQuestionMark className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Go Back",
      href: "/",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(0);

  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen pt-2"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <div className="text-primary">{open ? <Logo /> : <LogoIcon />}</div>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  onClick={() => setCurrentPage(idx)}
                  key={idx}
                  link={link}
                />
              ))}
            </div>
          </div>
          <div>
            <ModeToggle />
          </div>
        </SidebarBody>
      </Sidebar>

      <div className={`overflow-auto ${currentPage === 0 && "overflow-clip"}`}>
        {currentPage === 0 && <Dashboard />}
        {currentPage === 1 && <DataPage />}
      </div>
      {/* <Map /> */}
    </div>
  );
}

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Biohazard className="h-5 w-5 shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="whitespace-pre"
      >
        SandGrain
      </motion.span>
    </div>
  );
};

export const LogoIcon = () => {
  return <Biohazard className="h-5 w-5 shrink-0" />;
};
