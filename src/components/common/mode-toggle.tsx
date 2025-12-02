"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Button size={"icon"} variant={"outline"} className="rounded-full">
      <div className="relative">
        <div
          onClick={() => setTheme("dark")}
          className="p-2.5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </div>
        <div
          onClick={() => setTheme("light")}
          className="p-2.5 absolute inset-0 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </div>
        <span className="sr-only">Toggle theme</span>
      </div>
    </Button>
  );
}
